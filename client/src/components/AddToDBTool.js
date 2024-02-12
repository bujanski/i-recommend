import axios from 'axios';
import React, { useState } from 'react';

function AddToDBTool() {
  const [imdbID, setImdbID] = useState('');
  const [movieData, setMovieData] = useState(null);

  const getMovieData = async () => {
    try {
      const newData = await axios.get(`http://www.omdbapi.com/?apikey=c1adbf81&i=${imdbID}`);
      setMovieData(newData.data);
      console.log(newData.data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleInputChange = (e) => {
    setImdbID(e.target.value);
  };

  const handleEdit = (key, value) => {
    setMovieData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  return (
    <div id="add-to-db-tool">
      <div>add a movie to the iRecommend database</div>
      <div>
        enter the imdb id:&nbsp;
        <input
          type="text"
          value={imdbID}
          onChange={handleInputChange}
        />
        &nbsp;
        <button onClick={getMovieData}>get data</button>
      </div>

      {movieData ? (
        <div>
          <h2>Fetched Movie Data</h2>
          {Object.entries(movieData).map(([key, value]) => (
            <div key={key} style={{display: 'flex', justifyContent: 'space-between'}}>
              <label>{key}:</label>
              <input
                type="text"
                value={value}
                onChange={(e) => handleEdit(key, e.target.value)}
                style={{
                    width: '700px',
                    maxWidth: '100%', // You can adjust this value based on your layout
                    padding: '4px',   // Optional: Add padding for better visual appeal
                  }}
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default AddToDBTool;
