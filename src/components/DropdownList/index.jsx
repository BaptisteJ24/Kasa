import React, { useState } from 'react';
import PropTypes from 'prop-types';

const DropdownList = ({ className, name, value }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={className + '__dropdown'}>
      <div className="" onClick={toggleDropdown}>
        <span>{name}</span>
        <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
      </div>

      <p>{value}</p>
    </div>
  );
};

DropdownList.propTypes = {
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default DropdownList;
