import React, {useState, useContext, useEffect} from 'react';
import {AppContext} from '../store/AppContext';
import axios from 'axios';

function SearchBar() {
    const {state, dispatch} = useContext(AppContext);
    const {selectingCategory} = state;
    const [searchText,
        setSearchText] = useState('');
    const [debouncedSearch,
        setDebouncedSearch] = useState('');
    const [searchResults,
        setSearchResults] = useState([]);
    const cancelAddItem = () => {
        dispatch({type: 'cancelAddItem', payload: selectingCategory});
    };

    const queryMovies = async(search) => {
        try {
            const response = await axios.get(`http://localhost:8000/movies/${search}`);
            setSearchResults(response.data.data.slice(0, 20)); // Limit results to the first 20 items
        } catch (error) {
            console.error('Error searching database', error);
            setSearchResults([]); // Clear results in case of an error
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

    const debouncedQueryMovies = debounce(queryMovies, 1000, false);

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setSearchText(inputValue);
        setDebouncedSearch(inputValue);
    };

    // Call the debounced queryMovies function when debouncedSearch changes
    useEffect(() => {
        debouncedQueryMovies(debouncedSearch);
    }, [debouncedSearch]);

    return (
        <div>
            <div className='search-bar'>
                <div className='search-label'>Search</div>
                <div>
                    <input
                        className='search-field'
                        type='text'
                        placeholder='title'
                        value={searchText}
                        onChange={handleInputChange}/>
                </div>
                <div className='cancel-div'>
                    <button className='cancel-button' onClick={cancelAddItem}>
                        Cancel
                    </button>
                </div>
            </div>
            <div className='search-results'>
                {searchResults.map((result) => (
                    <div key={result.id}>
                        {/* Render individual search result items here */}
                        {result.title}, {result.director}, {result.actors}, {result.year}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchBar;
