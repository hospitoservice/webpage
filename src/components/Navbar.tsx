import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from './Logo';
import './Navbar.css';

interface NavItem {
  to: string;
  label: string;
}

const navItems: NavItem[] = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'services', label: 'Services' },
  { to: 'contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [click, setClick] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="navbar-container">
        {/*<Logo onClick={closeMobileMenu} />*/}
        <div className="menu-icon" onClick={handleClick} aria-label="Menu">
          {click ? (
            <CloseIcon style={{ fontSize: '2rem' }} />
          ) : (
            <MenuIcon style={{ fontSize: '2rem' }} />
          )}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {navItems.map((item, index) => (
            <li 
              key={item.to} 
              className="nav-item"
              style={{ '--i': index } as React.CSSProperties}
            >
              <Link
                to={item.to}
                className="nav-links"
                onClick={closeMobileMenu}
                smooth={true}
                duration={500}
                offset={-80}
                activeClass="active"
                spy={true}
                aria-label={item.label}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
