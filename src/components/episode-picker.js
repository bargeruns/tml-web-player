import _ from 'lodash';
import React from 'react';

import './episode-picker.css';
import EpisodeList from './episode-list.js';

const renderOpenPicker = (episodes, callack) => {

}
const episodePicker = ({episodes, setNowPlaying, shouldShowPicker, togglePicker}) => {
  if (shouldShowPicker) {
    return (
      <div className="card episode-picker">
        <h2 className="dismiss-button" onClick={() => togglePicker(false)}><i className="fa fa-chevron-down fa-2x"></i></h2>
        <EpisodeList episodes={episodes} setNowPlaying={setNowPlaying} />
      </div>
    );
  } else {
    return (
      <div className="card episode-picker">
        <h2 className="open-button" onClick={() => togglePicker(true)}><fa className="fa fa-chevron-up fa-2x"></fa></h2>
      </div>
    )
  }
};

export default episodePicker;
