import React from 'react';
import PropTypes from 'prop-types';
import Girl from '../Girl';
import './styles.scss'

GirlList.propTypes = {
  girlList: PropTypes.array.isRequired,
};

function GirlList({ girlList }) {
  return (
    <ul className='girl-list'>
      {girlList.map(girl => (
        <li key={girl.id}>
          <Girl girl={girl} />
        </li>
      ))}
    </ul>
  );
}

export default GirlList;