import React, { useEffect, useState } from "react";
import axios from "axios";
import AddToDBTool from "./AddToDBTool";

function formatCategoryText(category) {
    return category.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
}

function WorldFavList({ category }) {
    const categoryURLs = {
        movies: "http://localhost:8000/recs/top/Movie",
        books: "http://localhost:8000/recs/top/Book",
        videoGames: "http://localhost:8000/recs/top/Videogame",
    };

    const queryURL = categoryURLs[category] || "defaultURL";
    const itemAttribute = category === "videoGames" ? "title" : "title";

    const queryCategory = async () => {
        try {
            const response = await axios.get(queryURL);
            console.log(response.data);
            return response.data; // Assuming you want the data property of the response
            
        } catch (error) {
            console.error("Error searching database", error);
        }
    };

    // Use state to manage the asynchronous data and the number of items to display
    const [showTopList, setShowTopList] = useState([]);
    const [displayCount, setDisplayCount] = useState(5);

    useEffect(() => {
        const fetchData = async () => {
            const data = await queryCategory();
            setShowTopList(data);
        };

        fetchData();
    }, [category, queryURL]); // Run the effect when category or queryURL changes

    const handleExpandClick = () => {
        // Toggle between displaying 5 and all items
        setDisplayCount(displayCount === 5 ? showTopList.length : 5);
    };

    // Render your component based on showTopList
    return (
        <div className="world-list">
            <h3>iRecommend's favorite {formatCategoryText(category)}</h3>
            {showTopList.slice(0, displayCount).map((item, index) => (
                <div key={index}>{item[itemAttribute]}</div>
            ))}
            <button onClick={handleExpandClick}>
                {displayCount === 5 ? "Show All" : "Show Less"}
            </button>
        </div>
    );
}

export default WorldFavList;
