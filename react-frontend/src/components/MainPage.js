import React, { useState } from 'react';
import {
  Link
} from 'react-router-dom';

export default function MainPage() {

  return (
    <>
      <div className="title">JapFlash</div>
      <nav className="navbar">
        <Link to="/input">Input</Link>
        <Link to="/flashcards">FlashCards</Link>
        <Link to="/challenge">Challenge</Link>
        <Link to="/multiple">Multiple</Link>
        <Link to="/report">Report</Link>
      </nav>
    </>
  )
}