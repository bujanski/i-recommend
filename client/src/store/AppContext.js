import { createContext } from "react";

export const AppContext = createContext(null);

export const appData = {
    userLoggedIn: true,
    aboutDisplay: false,
    selectingCategory: "movie",
}

export const mediaCategories = [
    "Book",
    "Movie",
    "Podcast",
    "Video game",
    

    
]