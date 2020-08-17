import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/pinterest.svg';
import bell from '../assets/bell.svg';

const Header = ({
  clickThis, searchImages, handleSearch, search,
}) => (
  <header className="header">
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link to="/">
        <img src={logo} alt="pinterest" className="logo" />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <button
              type="button"
              className="nav-btn"
              onClick={(e) => {
                e.preventDefault();
                clickThis();
              }}
            >
              <span>Inicio</span>
              <span className="sr-only">(current)</span>
            </button>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Siguiendo</a>
          </li>
        </ul>
        <form
          className="form-inline my-2 my-lg-0 search-form"
          onSubmit={(e) => {
            e.preventDefault();
            searchImages(search);
          }}
        >
          <input
            className="form-control mr-sm-2 input-search"
            type="search"
            placeholder="Buscar"
            aria-label="Buscar"
            value={search}
            onChange={handleSearch}
          />
        </form>
        <ul className="navbar-nav">
          <li>
            <svg className="gUZ B9u U9O kVc" height="24" width="24" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img"><path d="M12 24c-1.66 0-3-1.34-3-3h6c0 1.66-1.34 3-3 3zm7-10.83c1.58 1.52 2.67 3.55 3 5.83H2c.33-2.28 1.42-4.31 3-5.83V7c0-3.87 3.13-7 7-7s7 3.13 7 7v6.17z" /></svg>
          </li>
          <li>
            <svg className="Hn_ gUZ B9u U9O kVc" height="24" width="24" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img"><path d="M18 12.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6 12.5M12 0C5.925 0 1 4.925 1 11c0 2.653.94 5.086 2.504 6.986L2 24l5.336-3.049A10.93 10.93 0 0 0 12 22c6.075 0 11-4.925 11-11S18.075 0 12 0" /></svg>
          </li>
          <li>
            <svg preserveAspectRatio="xMidYMid meet" role="img" version="1.1" viewBox="-3 -8 30 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12c5.523 0 10 4.477 10 10v2H2v-2c0-5.523 4.477-10 10-10zm0-1a5.5 5.5 0 1 1 0-11 5.5 5.5 0 1 1 0 11z" fill="#111" />
            </svg>
          </li>
          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li> */}
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
