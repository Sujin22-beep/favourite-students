import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import StudentProvider from "./context/StudentContext";

import StudentList from "./pages/StudentList";
import FavouriteStudents from "./pages/FavouriteStudents";

import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <StudentProvider>

                <nav className="navbar">
                    <h2>Student App</h2>

                    <div>
                        <Link to="/">Student List</Link>
                        <Link to="/favourites">Favourite Students</Link>
                    </div>
                </nav>

                <Routes>
                    <Route path="/" element={<StudentList />} />

                    <Route
                        path="/favourites"
                        element={<FavouriteStudents />}
                    />
                </Routes>

            </StudentProvider>
        </BrowserRouter>
    );
}

export default App;