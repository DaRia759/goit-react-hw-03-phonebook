import React from 'react';
import PropType from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={css.findZone}>
    Find contacts by name
        <input type="text" value={value} onChange={onChange} name='filter' />
  </label>
);

Filter.propTypes = {
  value: PropType.string.isRequired,
  onChange: PropType.func.isRequired,
};

export default Filter;