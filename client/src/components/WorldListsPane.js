import React from 'react'
import WorldFavList from './WorldFavList'
import SelectionWidget from './SelectionWidget'
import AddToDBTool from './AddToDBTool'
import GameList from './GameList'

function WorldListsPane() {

    return (
        <div id="world-lists-pane">
            <div id="world-lists-title">
                the world's favorites    
            </div>
            <WorldFavList category={"books"} />
            <WorldFavList category={"movies"} />
            <WorldFavList category={"videoGames"} />
        </div>
    )
}

export default WorldListsPane