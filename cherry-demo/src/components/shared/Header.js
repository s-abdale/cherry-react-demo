import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='main-header-body'>
      header component
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/mystery">Mystery</Link>
    </div>
  )
}

export default Header;