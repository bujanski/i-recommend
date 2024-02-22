import { createContext } from "react";

export const AppContext = createContext(null);

export const appData = {
    userLoggedIn: true,
    aboutDisplay: false,
    selectingCategory: "movies",
    addingItem: false,
    modalOpen: false,
}

export const mediaCategories = [
    "Books",
    "Movies",
    "Podcasts",
    "Video games",
]