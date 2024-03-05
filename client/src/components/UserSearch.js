import React, {useContext, useState} from 'react'

function UserSearch() {
    const [userSearchText,
        setUserSearchText] = useState('');

    const handleInputChange = (event) => {
        setUserSearchText(event.target.value);
        // send the text to API for fetching results here
    };

    return (
        <div className='top-search'>

            <div>
                <input
                    className='search-field'
                    type="text"
                    placeholder='Search'
                    value={userSearchText}
                    onChange={handleInputChange}/>
            </div>
            <div>
                <button>find</button>
            </div>
        </div>
    )
}

export default UserSearch