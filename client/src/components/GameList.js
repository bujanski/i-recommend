import React, {useEffect, useState} from 'react';
import pullRAWGData from '../getFromRAWG';
import axios from 'axios';

function GameList() {
    const [games,
        setGames] = useState([]);
    const [nextURL,
        setNextURL] = useState(null);

    const fetchNextGames = async() => {
        try {
            const nextGameData = await pullRAWGData(nextURL);
            setGames(nextGameData.results);
            setNextURL(nextGameData.next);
        } catch (error) {
            console.error('Error fetching game data', error);
        }
    };

    useEffect(() => {
        const initialURL = 'https://api.rawg.io/api/games?key=03789985d56e4406b13c5deb57fac7ad&dates=1980-01-01,2024-01-01';

        const getGames = async() => {
            try {
                const gameData = await pullRAWGData(initialURL);
                setGames(gameData.results);
                setNextURL(gameData.next);
            } catch (error) {
                console.error('Error fetching game data', error);
            }
        };

        getGames();
    }, []);

    return (
        <div className='get-games'>
            <h3>Game List</h3>
            {games && (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Release date</th>
                            <th>Platforms</th>
                            <th>RAWG ID</th>
                            <th>Genres</th>
                            <th>Playtime</th>
                            <th>ESRB rating</th>
                            <th>Image URL</th>
                            <th>Metacritic</th>
                        </tr>
                    </thead>
                    <tbody>
                        {games.map((game, index) => (
                            <tr key={index}>
                                <td>{game.name}</td>
                                <td>{game.released}</td>
                                <td>{game
                                        .platforms
                                        .map((platform) => platform.platform.name)
                                        .join(', ')}</td>
                                <td>{game.id}</td>
                                <td>{game
                                        .genres
                                        .map((genre) => genre.name)
                                        .join(', ')}</td>
                                <td>{game.playtime}</td>
                                <td>{game.esrb_rating
                                        ? game.esrb_rating.name
                                        : null}</td>
                                <td>{game.background_image}</td>
                                <td>{game.metacritic}</td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan="4">
                                {nextURL && (
                                    <button onClick={fetchNextGames}>Next 20 results</button>
                                )}
                            </td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default GameList;
