import React from 'react';
import {
  Link
} from 'react-router-dom';

import "./sideDrawer.scss"
export default function SideDrawer ({show}) {
  let drawerClass;
  if (show.display) {
    console.log(show)
    drawerClass = 'side-drawer show-nav';
    console.log(drawerClass)
  } else {
    console.log(show)
    drawerClass = 'side-drawer';
  };
  return (
    <nav className={drawerClass}>
      <ul>
        <li><Link to="/input">Input</Link></li>
        <li><Link to="/flashcards">FlashCards</Link></li>
        <li><Link to="/challenge">Challenge</Link></li>
        <li><Link to="/multiple">Multiple</Link></li>
        <li><Link to="/report">Report</Link></li>
      </ul>
  </nav>
  )
};