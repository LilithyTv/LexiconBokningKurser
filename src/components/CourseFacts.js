// src/components/CourseFacts.js
import React from 'react';
import './CourseFacts.css';

const CourseFacts = () => {
  return (
    <aside className="course-facts">
      <h3>Kursfakta</h3>
      <ul>
        <li><strong>Typ:</strong> Öppen</li>
        <li><strong>Längd:</strong> 2 dagar</li>
        <li><strong>Ditt pris:</strong> 16 900 kr exkl. moms</li>
        <li><strong>Klippkort:</strong> Ja</li>
        <li><strong>Planerad:</strong> 2 orter, 3 tillfällen</li>
      </ul>
      <button className="btn">Välj kurstillfälle</button>
    </aside>
  );
};

export default CourseFacts;
