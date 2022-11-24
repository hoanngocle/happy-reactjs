import React from 'react';
import GirlList from './components/GirlList';

GirlFeature.propTypes = {};

function GirlFeature(props) {
  const girlList = [
    {
      id: 1,
      name: 'Emilia',
      thumbnailUrl: 'https://i.imgur.com/kA8FuCW.jpg'
    },
    {
      id: 2,
      name: 'Daisy',
      thumbnailUrl: 'https://i.imgur.com/x39mZgk.jpg'
    },
    {
      id: 3,
      name: 'Rose',
      thumbnailUrl: 'https://i.imgur.com/Rma3lVj.jpg'
    },
    {
      id: 4,
      name: 'Nyx',
      thumbnailUrl: 'https://i.imgur.com/UNI9tlJ.jpg'
    },
    {
      id: 5,
      name: 'Ikaros',
      thumbnailUrl: 'https://i.imgur.com/YHENu8F.jpg'
    },
  ];

  return (
    <div>
      <h2>Có thể bạn sẽ thích đấy</h2>
      <GirlList girlList={girlList} />
    </div>
  );
}

export default GirlFeature;