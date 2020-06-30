import React from 'react';
import './toggleButton.scss';
export default function ToggleButton ({toggle}) {
  return (
    <button className="toggle-button" onClick={toggle}>
      <div className="toggle-button-line"></div>
      <div className="toggle-button-line"></div>
      <div className="toggle-button-line"></div>
    </button>
  )
};