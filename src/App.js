// src/App.js
import React from 'react';
import Header from './components/Header';
import CourseInfo from './components/CourseInfo';
import CourseFacts from './components/CourseFacts';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <CourseInfo />
        <CourseFacts />
      </main>
    </div>
  );
}

export default App;
