import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

Girl.propTypes = {
  girl: PropTypes.object.isRequired,
};

function Girl({ girl }) {
  return (
    <div className='girl'>
      <div className='girl__thumbnail'>
        <img src={girl.thumbnailUrl} alt={girl.name} />
      </div>

      <p className='girl__name'>{girl.name}</p>
    </div>
  );
}

export default Girl;