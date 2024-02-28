import { createContext } from "react";

export const AppContext = createContext(null);

export const appData = {
    userLoggedIn: false,
    loggedInUser: null,
    aboutDisplay: false,
    selectingCategory: null,
    addingItem: false,
    modalOpen: false,
}

export const mediaCategories = [
    "Books",
    "Movies",
    "Podcasts",
    "Video games",
]