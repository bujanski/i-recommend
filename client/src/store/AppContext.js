import { createContext } from "react";

export const AppContext = createContext(null);

export const appData = {
    userLoggedIn: false,
    aboutDisplay: false,
    selectingCategory: "movie",
    addingItem: false,
    modalOpen: false,
}

export const mediaCategories = [
    "Book",
    "Movie",
    "Podcast",
    "Video game",
]