import { createContext } from "react";

export const AppContext = createContext(null);

export const appData = {
    userLoggedIn: false,
    loggedInUserId: null,
    loggedInUsername: null,
    aboutDisplay: false,
    selectingCategory: null,
    addingItem: false,
    activeCategory: null,
    modalOpen: false,
};

export const mediaCategories = ["Books", "Movies", "Podcasts", "Video games"];
