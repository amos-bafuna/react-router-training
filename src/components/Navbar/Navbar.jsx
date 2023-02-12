import React, { useContext } from 'react';
import ThemeContext from '../../ThemeContext';
import { Link } from 'react-router-dom';

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <nav>
      <Link to="/" className={theme === 'dark' ? 'link-dark' : 'link-light'}>
        Accueil
      </Link>
      <Link
        to="/services"
        className={theme === 'dark' ? 'link-dark' : 'link-light'}
      >
        Services
      </Link>
      <label htmlFor="changeTheme">
        <input
          type="checkbox"
          id="changeTheme"
          checked={theme === 'dark'}
          onChange={(e) => {
            setTheme(e.target.checked ? 'dark' : 'light');
          }}
        />
        Use dark mode
      </label>
    </nav>
  );
}

export default Navbar;
