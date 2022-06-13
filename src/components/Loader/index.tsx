import React from 'react';
import './Loader.scss';

function Loader() {
  return (
    <div className="loading">
      <div className="loading__circle">
        <div id="floatingCirclesG">
          <div className="f_circleG" id="frotateG_01" />
          <div className="f_circleG" id="frotateG_02" />
          <div className="f_circleG" id="frotateG_03" />
          <div className="f_circleG" id="frotateG_04" />
          <div className="f_circleG" id="frotateG_05" />
          <div className="f_circleG" id="frotateG_06" />
          <div className="f_circleG" id="frotateG_07" />
          <div className="f_circleG" id="frotateG_08" />
        </div>
      </div>
      <div className="loading__text">Загрузка...</div>
    </div>

  );
}

export default Loader;
