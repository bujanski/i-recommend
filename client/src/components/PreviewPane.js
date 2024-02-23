import React from 'react'
import PreviewList from './PreviewList'
import SelectionWidget from './SelectionWidget'
import AddToDBTool from './AddToDBTool'
import GameList from './GameList'

function PreviewPane() {

    return (
        <div id="preview-pane">
            <div id="preview-title">
                the world's favorites    
            </div>
            <PreviewList />
        </div>
    )
}

export default PreviewPane