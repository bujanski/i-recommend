import React, {useContext} from 'react'
import {AppContext} from '../store/AppContext'
import DragList from './DragList';
import SearchBar from './SearchBar';

function SelectionWidget() {
    const {state, dispatch} = useContext(AppContext);
    const {selectingCategory, addingItem} = state;
    const lCaseCategory = selectingCategory.toLowerCase();

    const startAddItem = () => {
        dispatch({type: 'startAddItem', payload: selectingCategory});
    }

    return (
        <div className='selection-widget'>
            <div className='search-tool'>
                <div className='add-item-button' onClick={startAddItem}>
                                   
                        + Add a {lCaseCategory} to your list
                    
                </div>
                {addingItem ? <SearchBar /> : null}
            </div>
            <div>
                <DragList number={5}/>
            </div>
        </div>

    )
}

export default SelectionWidget