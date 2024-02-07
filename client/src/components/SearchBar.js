import React, {useState, useContext} from 'react';
import {AppContext} from '../store/AppContext'

function SearchBar() {
    const {state, dispatch} = useContext(AppContext);
    const {selectingCategory} = state;
    const [searchText, setSearchText] = useState('');
    const cancelAddItem = () => {
        dispatch({type: 'cancelAddItem', payload: selectingCategory});
    }

    const handleInputChange = (event) => {
        setSearchText(event.target.value);
        // send the text to API for fetching results here
    };

    return (
        <div>
            <div className='search-bar'>
                <div className='search-label'>
                    Search
                </div>
                <div>
                    <input
                        className='search-field'
                        type="text"
                        value={searchText}
                        onChange={handleInputChange}/>
                </div>
                <div className='cancel-div'>
                    <button className='cancel-button' onClick={cancelAddItem}>Cancel</button>
                </div>
            </div>
            <div className='search-results'>
                {searchText && (
                    <div id="results">Search Results: {searchText}</div>
                // render actual search results here based on the searchText
                )}
            </div>
        </div>
    );
}

export default SearchBar;
