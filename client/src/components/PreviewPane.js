import React from 'react'
import PreviewList from './PreviewList'
import SelectionWidget from './SelectionWidget'

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