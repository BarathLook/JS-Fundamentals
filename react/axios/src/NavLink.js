import React from 'react';
import { useNavigate, Outlet, Link } from 'react-router-dom';

const NavLink = ({ to, label }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <Link to={to} onClick={handleClick}>
      {label}
    </Link>
  );
};

export default NavLink;
