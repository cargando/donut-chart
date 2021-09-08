import React from 'react';
import './styles.scss';


const Donut = (props) => {

  const {
    header,
    radius,
    thikness,
    parts,
    width,
    height,
    renderLegend,
    renderHeader,
  } = props;

  return (
    <div className="donut-container">
      <div className="donut-chart-block block">
        <div className="donut-chart">
          <div id="part1" className="portion-block">
            <div className="circle"></div>
          </div>
          <div id="part2" className="portion-block">
            <div className="circle"></div>
          </div>
          <div id="part3" className="portion-block">
            <div className="circle"></div>
          </div>
          <p className="center"></p>
        </div>
      </div>
    </div>
  );
};

export default Donut;
