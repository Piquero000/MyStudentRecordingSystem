import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./App.css";

const App = () => {
  const [students, setStudents] = useState([]);

  // Fetch students on page load
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/api/students");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  // Add student and update list
  const addStudent = async (name, course) => {
    try {
      await axios.post("http://127.0.0.1:5000/api/students", { name, course });
      fetchStudents(); // Refresh student list immediately
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  // Delete student function
  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/api/students/${id}`);
      fetchStudents(); // Refresh list after deletion
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Student Recording System</h1>
      <StudentForm addStudent={addStudent} />
      <StudentList students={students} deleteStudent={deleteStudent} />
    </div>
  );
};

export default App;