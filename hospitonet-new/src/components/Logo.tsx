import React from 'react';
import { Link } from 'react-scroll';
import logo from '../asset/hospitonetLogo.jpeg';

interface LogoProps {
  className?: string;
  height?: number;
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({ className = '', height = 50, onClick }) => {
  return (
    <Link 
      to="home" 
      className={`logo-link ${className}`}
      smooth={true}
      duration={500}
      offset={-80}
      onClick={onClick}
    >
      <img 
        src={logo} 
        alt="Hospitonet Logo" 
        className="logo"
        style={{ height: `${height}px`, width: 'auto' }}
      />
    </Link>
  );
};

export default Logo;
