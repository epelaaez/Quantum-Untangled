import React from 'react';
import './NotFound.css';

import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1><strong>404</strong></h1>
        <h2>Page not found!</h2>
        <Link to="/">
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;