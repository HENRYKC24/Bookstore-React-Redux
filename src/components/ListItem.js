import React from 'react';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';

const ListItem = ({ route, name, index }) => {
  if (index === 0) {
    return (
      <li className="list-item first">
        <NavLink className="item" to={route} activeClassName="active-link" exact>
          {name}
        </NavLink>
      </li>
    );
  }
  return (
    <li>
      <NavLink className="item" to={route} activeClassName="active-link" exact>
        {name}
      </NavLink>
    </li>
  );
};

ListItem.propTypes = {
  route: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  index: propTypes.number.isRequired,
};

export default ListItem;
