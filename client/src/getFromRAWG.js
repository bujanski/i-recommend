import axios from "axios";

const pullRAWGData = () => {
    return axios.get('https://api.rawg.io/api/games?key=03789985d56e4406b13c5deb57fac7ad&dates=2019-09-01,2019-09-30&platforms=18,1,7')
        .then(response => response.data)
        .catch(error => {
            console.error('Error fetching games:', error);
            throw error; // Re-throw the error to handle it elsewhere if needed
        });
}

export default pullRAWGData;