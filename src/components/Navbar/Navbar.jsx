import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../../App.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <Link to="/hpwiki" className="fs-1 fw-bold ubuntu navbar-brand p-3">Harry Potter <span className="text-warning">Wiki</span></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 fs-5 p-3">
              <li className='nav-item'>
                <NavLink activeClassName="active" to="/hpwiki" className="nav-link fs-3">Characters</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/house" className="nav-link fs-3">Houses</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to="/spells" className="nav-link fs-3">Spells</NavLink>
              </li>                          
          </ul>
        </div>
    </nav>
  )
}

export default Navbar