import React, { useState } from 'react';
import {
  Link
} from 'react-router-dom';

import ToggleButton from './toggleNavbar/toggleButton';
import SideDrawer from './toggleNavbar/sideDrawer';
export default function MainPage() {

  const [display, setDisplay] = useState(false);

  const handleToggle = () => {
    setDisplay((prevDisplay) => {
      return {display: !prevDisplay.display}
    })
  };
  // const sideNav = () => {
  //   if (display) {
  //     return <SideDrawer/>
  //   }
  // }
  return (
    <>
      <ToggleButton toggle={handleToggle}/>
      <div className="title">JapFlash</div>
      <SideDrawer show={display}/>
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