import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './navbar';
import './styles.scss';
export default function MainPage() {
  return (
    <div className="main-page">
      
      <NavBar/>
      {/* <nav className="navbar">
      <ul>
        <Link to="/input">Input</Link>
        <Link to="/flashcards">FlashCards</Link>
        <Link to="/challenge">Challenge</Link>
        <Link to="/multiple">Multiple</Link>
        <Link to="/multiple">Report</Link>
      </ul>
    </nav> */}
    </div>
  )
}