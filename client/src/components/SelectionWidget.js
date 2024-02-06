import React, {useContext} from 'react'
import {AppContext, appData} from '../store/AppContext'
import ReactDOM from "react-dom";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import DragList from './DragList';

function SelectionWidget() {
    const {state, dispatch} = useContext(AppContext);
    const {selectingCategory} = state;
    const lCaseCategory = selectingCategory.toLowerCase();

    return (
        <div className='selection-widget'>
            <div className='search-tool'>
                <div className='add-item-button'>
                                   
                        + Add a {lCaseCategory} to your list
                    
                </div>

            </div>
            <div>
                <DragList number={10}/>
            </div>
        </div>

    )
}

export default SelectionWidget