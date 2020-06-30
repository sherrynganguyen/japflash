import React from 'react';
import './toggleButton.scss';
export default function ToggleButton () {
  return (
    <button className="toggle-button">
      <div className="toggle-button-line"></div>
      <div className="toggle-button-line"></div>
      <div className="toggle-button-line"></div>
    </button>
  )
};