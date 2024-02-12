import React, {useContext, useState} from 'react'

function TopSearch() {
    const [siteSearchText,
        setSiteSearchText] = useState('');

    const handleInputChange = (event) => {
        setSiteSearchText(event.target.value);
        // send the text to API for fetching results here
    };

    return (
        <div className='top-search'>

            <div>
                <input
                    className='search-field'
                    type="text"
                    placeholder='Search'
                    value={siteSearchText}
                    onChange={handleInputChange}/>
            </div>
            <div>
                <button>find</button>
            </div>
        </div>
    )
}

export default TopSearch