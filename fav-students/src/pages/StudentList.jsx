import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function StudentList() {

    const { favourites, addFavourite } = useContext(StudentContext);

    const students = [
        { id: 1, name: "Sujin", rollNo: 101 },
        { id: 2, name: "Mary", rollNo: 102 },
        { id: 3, name: "Siyana", rollNo: 103 },
        { id: 4, name: "Freddy", rollNo: 104 },
        { id: 5, name: "Sheryl", rollNo: 105 },
        { id: 6, name: "Amutha", rollNo: 106 }
    ];

    return (
        <div className="container">

            <h1>Student List</h1>

            <div className="student-grid">

                {students.map((student) => {

                    const isAdded = favourites.some(
                        (item) => item.id === student.id
                    );

                    return (
                        <div className="card" key={student.id}>

                            <h2>{student.name}</h2>

                            <p>Roll Number: {student.rollNo}</p>

                            <button
                                onClick={() => addFavourite(student)}
                                disabled={isAdded}
                            >
                                {isAdded
                                    ? "Added"
                                    : "Add to Favourite"}
                            </button>

                        </div>
                    );
                })}

            </div>

        </div>
    );
}

export default StudentList;