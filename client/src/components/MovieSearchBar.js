import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../store/AppContext";
import axios from "axios";

function MovieSearchBar({ onRecommendationAdded }) {
    const { state, dispatch } = useContext(AppContext);
    const { selectingCategory, loggedInUserId } = state;
    const [searchText, setSearchText] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const cancelAddItem = () => {
        dispatch({ type: "cancelAddItem", payload: selectingCategory });
    };

    const queryCategory = async (search) => {
        try {
            const response = await axios.get(
                `http://localhost:8000/${selectingCategory}/search/${search}`
            );
            setSearchResults(response.data.data.slice(0, 20)); // Limit results to the first 20 items
        } catch (error) {
            console.error("Error searching database", error);
            setSearchResults([]); // Clear results in case of an error
        }
    };

    const addRec = async (item) => {
        try {
            let ranking = 25;
            let MovieId = item.id;
            let UserId = loggedInUserId;
            const { title } = item;
            // Send a request to the backend to add the recommendation
            const response = await axios.post(
                'http://localhost:8000/recs/addRec',
                { ranking, title, UserId, MovieId }
            );
            dispatch({type: "cancelAddItem"});
            console.log('Recommendation added successfully:', response.data);
            if (onRecommendationAdded) {
                onRecommendationAdded(response.data);
            }
        }catch (error) {
            console.error('Error adding recommendation', error);
    
            if (error.response && error.response.status === 400) {
                // The backend returned a 400 Bad Request status
                const errorMessage = error.response.data.error;
    
                // Check if the error message indicates a duplicate recommendation
                if (errorMessage === 'User has already recommended the same thing.') {
                    // Display an alert or show a message to inform the user
                    alert('You have already recommended this movie.');
                } else {
                    // Handle other 400 Bad Request errors as needed
                    // ...
                }
            } else {
                // Handle other types of errors
                // ...
            }
        }
    };

    const debounce = (func, delay, immediate = false) => {
        let timeoutId;
        return function (...args) {
            const callNow = immediate && !timeoutId;
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                timeoutId = null;
                if (!immediate) {
                    func.apply(this, args);
                }
            }, delay);
            if (callNow) {
                func.apply(this, args);
            }
        };
    };

    const debouncedQueryCategory = debounce(queryCategory, 1000, false);

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setSearchText(inputValue);
        setDebouncedSearch(inputValue);
    };

    // Call the debounced queryMovies function when debouncedSearch changes
    useEffect(() => {
        debouncedQueryCategory(debouncedSearch);
    }, [debouncedSearch]);

    return (
        <div>
            <div className="search-bar">
                <div className="search-label">Search</div>
                <div>
                    <input
                        className="search-field"
                        type="text"
                        placeholder="title, actor, director, year"
                        value={searchText}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="cancel-div">
                    <button className="cancel-button" onClick={cancelAddItem}>
                        Cancel
                    </button>
                </div>
            </div>
            <div>
                {searchResults.length === 0 && searchText ? (
                    <p>No results found</p>
                ) : (
                    searchResults.map((result) => (
                        <div className="search-result" key={result.id}>
                            {/* Render individual search result items here */}
                            <div>
                                <img
                                    className="search-result-poster"
                                    src={result.imageUrl}
                                    alt={`Poster for ${result.title}`}
                                />
                            </div>
                            <div className="search-result-details">
                                <h3>
                                    {result.title}&nbsp; ({result.year})
                                </h3>
                                <p>
                                    <b>Director:</b>&nbsp;
                                    {result.director}
                                </p>
                                <p>
                                    <b>Cast:</b>&nbsp;
                                    {result.actors}
                                </p>
                                <p>
                                    <b>
                                        <a
                                            href={`https://www.imdb.com/title/${result.imdbID}`}
                                            target="_blank"
                                        >
                                            IMDB page
                                        </a>
                                    </b>
                                </p>
                                <br />
                                <button onClick={() => addRec(result)}>add to my favorites</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default MovieSearchBar;
