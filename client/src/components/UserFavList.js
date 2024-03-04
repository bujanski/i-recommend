import React, { useState, useEffect, useContext } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { AppContext } from "../store/AppContext";
import axios from "axios";

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

const grid = 2;

const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
    background: "#366b8a",
    color: "white",
    ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
    background: "aliceblue",
    padding: grid,
    width: "100%",
});

const UserFavList = ({ category, onRecommendationAdded }) => {

    const { state, dispatch } = useContext(AppContext);
    const [items, setItems] = useState([]);
    const [expanded, setExpanded] = useState(false);
    const {loggedInUserId, addingItem} = state;

    useEffect(() => {
        const fetchData = async () => { // Remove the 'category' parameter here
            try {
                const response = await axios.get(
                    `http://localhost:8000/recs/${loggedInUserId}`
                );
    
                // Filter the data based on the category
                const filteredItems = response.data.userRecs.filter(item => {
                    
                    if (category === 'movies') {
                        console.log(item.MovieId);
                        return item.MovieId !== undefined && item.MovieId !== null;
                    } else if (category === 'books') {
                        return item.BookId !== undefined && item.BookId !== null;
                    } else if (category === 'videoGames') {
                        return item.VideogameId !== undefined && item.VideogameId !== null;
                    } else {
                        // Handle other cases or consider not filtering if the category is not recognized
                        return true;
                    }
                });
    
                setItems(filteredItems);
            } catch (error) {
                console.error("Error searching database", error);
            }
        };
    
        fetchData();
    }, [loggedInUserId, category, addingItem]);
    

    const onDragEnd = async (result) => {
        if (!result.destination) {
            return;
        }

        const startIndex = result.source.index;
        const endIndex = result.destination.index;

        const updatedItems = reorder(items, startIndex, endIndex);
        setItems(updatedItems);

        // Update the ranking of affected items
        const updatedItemsWithRanking = updatedItems.map((item, index) => ({
            ...item,
            ranking: index + 1,
        }));

        console.log(updatedItemsWithRanking);

        try {
            // Send a request to update the rankings on the server
            await axios.put(`http://localhost:8000/recs/update-rankings`, {
                category,
                updatedItems: updatedItemsWithRanking,
            });

            // Assuming the server responds with a success message
            console.log('Rankings updated successfully.');
        } catch (error) {
            console.error('Error updating rankings', error);
            // Handle the error as needed
        }
    };

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}
                        >
                            {expanded
                                ? items.map((item, index) => (
                                      <Draggable
                                          key={item.id}
                                          draggableId={item.id.toString()}
                                          index={index}
                                      >
                                          {(provided, snapshot) => (
                                              <div
                                                  className="orderable-item"
                                                  ref={provided.innerRef}
                                                  {...provided.draggableProps}
                                                  {...provided.dragHandleProps}
                                                  style={getItemStyle(
                                                      snapshot.isDragging,
                                                      provided.draggableProps
                                                          .style
                                                  )}
                                              >
                                                  {`${index + 1}: `}
                                                  {item.title}
                                                  <span className="material-symbols-outlined">
                                                      drag_indicator
                                                  </span>
                                              </div>
                                          )}
                                      </Draggable>
                                  ))
                                : items.slice(0, 5).map((item, index) => (
                                      <Draggable
                                          key={item.id}
                                          draggableId={item.id.toString()}
                                          index={index}
                                      >
                                          {(provided, snapshot) => (
                                              <div
                                                  className="orderable-item"
                                                  ref={provided.innerRef}
                                                  {...provided.draggableProps}
                                                  {...provided.dragHandleProps}
                                                  style={getItemStyle(
                                                      snapshot.isDragging,
                                                      provided.draggableProps
                                                          .style
                                                  )}
                                              >
                                                  {`${index + 1}: `}{" "}
                                                  {item.title}
                                                  <span className="material-symbols-outlined">
                                                      drag_indicator
                                                  </span>
                                              </div>
                                          )}
                                      </Draggable>
                                  ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
            <button onClick={toggleExpand}>
                {expanded ? "Collapse" : "Expand to see full list"}
            </button>
        </div>
    );
};

export default UserFavList;
