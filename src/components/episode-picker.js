import _ from 'lodash';
import React from 'react';

const episodePickerItem = (episode) => {
  return <li className="episode-picker-item">{episode.title}</li>;
};

const episodePicker = ({episodes}) => {
  return (
    <div className="card episode-picker">
      <ul className="episode-picker-list">
        {_.map(episodes, episodePickerItem)}
      </ul>
    </div>
  );
};

export default episodePicker;
