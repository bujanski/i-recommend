import React, { useContext } from "react";
import { AppContext } from "../store/AppContext";
import DragList from "./DragList";
import UserFavList from "./UserFavList";
import SearchBar from "./SearchBar";

function SelectionWidget() {
    const { state, dispatch } = useContext(AppContext);
    const { selectingCategory, addingItem } = state;
    const lCaseCategory = selectingCategory.toLowerCase();

    const startAddItem = () => {
        dispatch({ type: "startAddItem", payload: selectingCategory });
    };

    return (
        <div className="selection-widget">
            <h2>Your favorite movies</h2>
            <div className="search-tool">
                <div className="add-item-button" onClick={startAddItem}>
                    + Add {lCaseCategory} to your list
                </div>
                {addingItem ? <SearchBar /> : null}
            </div>
            <div>
                <UserFavList id={1} category={selectingCategory} />
            </div>
            <div>
                <button>Expand to see all your favorites</button>
            </div>
        </div>
    );
}

export default SelectionWidget;
