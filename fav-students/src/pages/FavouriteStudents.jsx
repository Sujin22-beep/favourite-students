import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function FavouriteStudents() {

    const { favourites, removeFavourite } = useContext(StudentContext);

    return (
        <div className="container">

            <h1>Favourite Students</h1>

            {favourites.length === 0 ? (

                <h3>No favourite students added yet</h3>

            ) : (

                <div className="student-grid">

                    {favourites.map((student) => (

                        <div className="card" key={student.id}>

                            <h2>{student.name}</h2>

                            <p>Roll Number: {student.rollNo}</p>

                            <button
                                className="remove"
                                onClick={() => removeFavourite(student.id)}
                            >
                                Remove
                            </button>

                        </div>

                    ))}

                </div>

            )}

        </div>
    );
}

export default FavouriteStudents;