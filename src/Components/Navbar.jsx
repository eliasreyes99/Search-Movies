import React from "react";
import { Link } from "react-router-dom";
import '../Styles/Navbar.css'

export default function Navbar() {
    const handleClick = () => {
        <Link to='/search' ></Link>
    }
  return (
    <div className="navbar">
      <button><Link to='/'>Home</Link></button>
      <button><Link to='/search'>Search</Link></button>
      <button><Link to='/favorites'>Favorites</Link></button>
    </div>
  );
}
