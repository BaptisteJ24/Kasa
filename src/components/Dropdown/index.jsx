import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/Dropdown.scss';

const Dropdown = ({ name, value, page }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${page}__dropdown`} data-active={isOpen}>
      <div
        className={`dropdown__title ${page}__dropdown__title`}
        onClick={toggleDropdown}
      >
        <span>{name}</span>
        <i
          className={`fas fa-chevron-${
            isOpen ? 'up' : 'down'
          } dropdown__chevron`}
        ></i>
      </div>

      <div className="dropdown__description">
        {typeof value === 'string' ? (
          value
        ) : typeof value === 'object' ? (
          <ul>
            {Object.values(value).map((item, index) => (
              <li key={`${index}dropdown_${item}`}>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  page: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};

export default Dropdown;
