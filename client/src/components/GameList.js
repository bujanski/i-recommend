import React from 'react'
import pullRAWGData from '../getFromRAWG'



function GameList() {

    const getGames = async () => {
        const games = await pullRAWGData();
        console.log(games);
    }
    // getGames ();
  return (
    <div>GameList</div>
  )
}

export default GameList






