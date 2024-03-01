import React, { useContext } from "react";
import { AppContext } from "../store/AppContext";
import UserFavList from "./UserFavList";
import SearchBar from "./SearchBar";

function formatCategoryText(category) {
    return category.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
}

function SelectionWidget({ category }) {
    const { state, dispatch } = useContext(AppContext);
    const { addingItem, selectingCategory } = state;
    const formattedCategory = formatCategoryText(category);

    const startAddItem = () => {
        dispatch({ type: "startAddItem", payload: category });
    };

    return (
        <div className="selection-widget">
            <h2>Your favorite {formattedCategory}</h2>
            <div className="search-tool">
                <div className="add-item-button" onClick={startAddItem}>
                    + Add {formattedCategory} to your list
                </div>
                {addingItem && selectingCategory === category ? <SearchBar /> : null}
            </div>
            <div>
                <UserFavList id={1} category={category} />
            </div>
            <div>
                <button>Expand to see all your favorites</button>
            </div>
        </div>
    );
}

export default SelectionWidget;
