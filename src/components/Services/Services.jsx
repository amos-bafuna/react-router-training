import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

function Services() {
  const location = useLocation();

  return (
    <>
      <h1>Services</h1>
      <Link
        to="/services/development"
        className={
          location.pathname === '/services/development' ? 'active' : ''
        }
      >
        Development
      </Link>
      <Link
        to="/services/marketing"
        className={location.pathname === '/services/marketing' ? 'active' : ''}
      >
        Marketing
      </Link>

      <div style={{ padding: '10px' }}>
        <Outlet />
      </div>
    </>
  );
}

export default Services;
