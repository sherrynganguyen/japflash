import React from 'react';
import {
  Link
} from 'react-router-dom';

export default function MainPage() {
  return (
    <>
      <h1 className="title">JapFlash</h1>
      <nav className="navbar">
        <Link to="/input">Input</Link>
        <Link to="/flashcards">FlashCards</Link>
        <Link to="/challenge">Challenge</Link>
        <Link to="/multiple">Multiple</Link>
        <Link to="/multiple">Report</Link>
      </nav>
    </>
  )
}