import React from "react";
import "../App.css"; // Updated import path

const StudentList = ({ students, deleteStudent }) => {
  return (
    <div className="student-list">
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id} className="student-item">
            {student.name} - {student.course}
            <button onClick={() => deleteStudent(student.id)} className="btn-delete">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
