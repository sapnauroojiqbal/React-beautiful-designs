import React from 'react';

function Navigation() {
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className='container'>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/articles">Articles</NavLink></li>
          </ul>
        </div>
      </nav>
    );
  }

export default Navigation
