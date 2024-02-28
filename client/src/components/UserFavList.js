import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import axios from 'axios';

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
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: "aliceblue",
    padding: grid,
    width: "100%"
});

const UserFavList = ({ id, category }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get(`http://localhost:8000/users/${id}/recs/${category}`);
                setItems(data.data);
            } catch (error) {
                console.error("Error searching database", error);
            }
        };

        fetchData();
    }, [id, category]);

    const onDragEnd = result => {
        if (!result.destination) {
            return;
        }

        const updatedItems = reorder(items, result.source.index, result.destination.index);
        setItems(updatedItems);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}
                    >
                        {items.map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided, snapshot) => (
                                    <div
                                        className="orderable-item"
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                                    >
                                        {item.content}
                                        {` - position ${index + 1}`}
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
    );
};

export default UserFavList;
