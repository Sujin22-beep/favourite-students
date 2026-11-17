import { createContext, useState } from "react";

export const StudentContext = createContext();

function StudentProvider({ children }) {

    const [favourites, setFavourites] = useState([]);

    // Add favourite
    const addFavourite = (student) => {

        const exists = favourites.some(
            (item) => item.id === student.id
        );

        if (!exists) {
            setFavourites([...favourites, student]);
        }
    };

    // Remove favourite
    const removeFavourite = (id) => {

        setFavourites(
            favourites.filter((student) => student.id !== id)
        );
    };

    return (
        <StudentContext.Provider
            value={{ favourites, addFavourite, removeFavourite }}
        >
            {children}
        </StudentContext.Provider>
    );
}

export default StudentProvider;