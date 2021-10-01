import React from 'react';
import { FaUser } from 'react-icons/fa';
import ListItem from './ListItem';

const Navbar = () => {
  const routes = [
    { route: '/', name: 'BOOKS' },
    { route: '/categories', name: 'CATEGORIES' },
  ];

  const ListItems = () => (
    routes.map((route, index) => (
      <ListItem
        key={Math.random()}
        index={index}
        name={route.name}
        route={route.route}
      />
    ))
  );

  return (
    <nav className="navbar">
      <div className="name-list-container">
        <h1 className="app-name">Bookstore CMS</h1>
        <ul className="list-items">
          {ListItems()}
        </ul>
      </div>
      <div className="user"><FaUser className="fa-user" /></div>
    </nav>
  );
};

export default Navbar;
