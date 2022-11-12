import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../../App.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <Link to="/hpwiki" className="fs-1 fw-bold ubuntu navbar-brand p-3">Harry Potter <span className="text-warning">Wiki</span></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <style jsx>
          {`
            button[aria-expanded="false"] > .close {
              display: none;
            }
            button[aria-expanded="true"] > .open {
              display: none;
            }
          `}
        </style>
        <i className='fas fa-bars open fw-bold text-dark'></i>
        <i className='fas fa-times close fw-bold text-dark'></i>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div className="navbar-nav fs-5 p-3">
            <NavLink activeClassName="active" to="/hpwiki" className="nav-link fs-3">Characters</NavLink>
            <NavLink to="/house" className="nav-link fs-3">Houses</NavLink>
            <NavLink to="/spells" className="nav-link fs-3">Spells</NavLink>
        </div>
        </div>
    </nav>
  )
}

export default Navbar