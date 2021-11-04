import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
  const navStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  const logoStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <nav>
      <Link style={logoStyle} to='/'>
        <h3>HomePage</h3>
      </Link>
      <ul>
        <Link style={navStyle} to='/About'>
          <li>About</li>
        </Link>
        <Link style={navStyle} to='/Shop'>
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
