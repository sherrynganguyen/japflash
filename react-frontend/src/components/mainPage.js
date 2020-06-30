import React from 'react';
import {
  Link
} from 'react-router-dom';

import ToggleButton from './toggleNavbar/toggleButton';

export default function MainPage() {
  return (
    <>
      <div className="header">
        <ToggleButton/>
        <div className="title">JapFlash</div>
      </div>
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