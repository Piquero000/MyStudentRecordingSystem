import React, { useState } from "react";
import "../App.css"; // Updated import path

const StudentForm = ({ addStudent }) => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const courseOptions = 
  ["Bachelor of Science in Information Technology", 
    "Bachelor of Science in Computer Science", 
    "Bachelor of Science in Business Administration",
    " Bachelor of Science in Agriculture",
     "Bachelor of Science in Education", 
     "Bachelor of Science in Nursing", 
     "Bachelor of Science in Electrical Engineering"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && course) {
      addStudent(name, course);
      setName("");
      setCourse("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <input
          type="text"
          className="form-input"
          placeholder="Enter Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <select className="form-select" value={course} onChange={(e) => setCourse(e.target.value)} required>
          <option value="" disabled>Select a Course</option>
          {courseOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      <button type="submit" className="btn-submit">
        Add Student
      </button>
    </form>
  );
};

export default StudentForm;