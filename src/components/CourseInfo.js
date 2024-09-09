// src/components/CourseInfo.js
import React from 'react';
import './CourseInfo.css';

const CourseInfo = () => {
  return (
    <section className="course-info">
      <h1>Leading SAFe® 6.0 (SA Certification)</h1>
      <p>
        Denna två-dagarsutbildning i Leading SAFe kommer att ge dig kunskap om vad som krävs för att verka i en organisation utifrån ett Lean-Agilt tankesätt genom att använda Scaled Agile Framework® (SAFe®) och dess underliggande principer, vilka kan härledas från Lean.
      </p>
      <h2>Förkunskaper</h2>
      <p>
        Alla är välkomna att delta på kursen, oavsett erfarenhet. Förkunskaper såsom 5+ års erfarenhet av mjukvaruutveckling, testning, affärsanalys, produkt eller projektledning och/eller erfarenhet av Scrum rekommenderas.
      </p>
    </section>
  );
};

export default CourseInfo;
