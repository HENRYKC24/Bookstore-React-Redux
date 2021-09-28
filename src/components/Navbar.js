import React from 'react';
import ListItem from './ListItem';

const Navbar = () => {
  const routes = [
    { route: '/', name: 'Books' },
    { route: '/categories', name: 'Categories' },
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
    <nav>
      <div>
        <h1>Bookstore CMS</h1>
        <ul>
          {ListItems()}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
