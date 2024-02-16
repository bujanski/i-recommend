import axios from "axios";

const pullRAWGData = (url) => {
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error fetching games:', error);
      throw error; // Re-throw the error to handle it elsewhere if needed
    });
};

export default pullRAWGData;
