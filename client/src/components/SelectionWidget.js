import React, { useContext, useState } from "react";
import { AppContext } from "../store/AppContext";
import UserFavList from "./UserFavList";
import MovieSearchBar from "./MovieSearchBar";

function formatCategoryText(category) {
    return category.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
}

function SelectionWidget({ category }) {
    const [newRecommendation, setNewRecommendation] = useState(null);
    const { state, dispatch } = useContext(AppContext);
    const { addingItem, selectingCategory } = state;
    const formattedCategory = formatCategoryText(category);

    const startAddItem = () => {
        dispatch({ type: "startAddItem", payload: category });
    };
    const handleRecommendationAdded = (recommendation) => {
        setNewRecommendation(recommendation);
    };
    return (
        <div className="selection-widget">
            <h2>Your favorite {formattedCategory}</h2>
            <div className="search-tool">
                <div className="add-item-button" onClick={startAddItem}>
                    + Add {formattedCategory} to your list
                </div>
                {addingItem && category === "movies" ? <MovieSearchBar onRecommendationAdded={handleRecommendationAdded} /> : null}
            </div>
            <div>
                <UserFavList category={category} onRecommendationAdded={handleRecommendationAdded} />
            </div>

        </div>
    );
}

export default SelectionWidget;
