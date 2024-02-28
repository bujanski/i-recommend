import React, {useContext, useState} from 'react'

function MatchSearch() {
    const [siteSearchText,
        setSiteSearchText] = useState('');

    const handleInputChange = (event) => {
        setSiteSearchText(event.target.value);
        // send the text to API for fetching results here
    };

    return (
        <div className='match-search'>

            <div>
                <input
                    className='search-field'
                    type="text"
                    placeholder='Enter a Username'
                    value={siteSearchText}
                    onChange={handleInputChange}/>
            </div>
            <div>
                <button>See if you match!</button>
            </div>
        </div>
    )
}

export default MatchSearch