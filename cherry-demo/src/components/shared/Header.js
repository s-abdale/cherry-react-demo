import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='main-header-body'>
      <img src="/cherries_emoji.png" className='header-icon' alt='Cherries emoji'/>

      <div className='grouped-header-links'>
        <Link to="/home" className='header-links'>Home</Link>
        <Link to="/about" className='header-links'>About</Link>
        <Link to="/mystery" className='header-links'>Mystery</Link>
        <Link to="/quiz" className='header-links'>Quiz</Link>
      </div>
    </div>
  )
}

export default Header;