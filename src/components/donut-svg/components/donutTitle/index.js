import React from 'react';
import './styles.scss';

export function DonutTitle(props) {
  const {xPos, yPos, title} = props;
  return (
    <text x={xPos} y={yPos} style={{textAlign: "center"}}>
      {
        title.length > 1 ? (
          <>
            <tspan x="50%"  textAnchor="middle" className="donut-svg__text-line1">{title[0]}</tspan>
            <tspan x="50%" dy="27px" textAnchor="middle" className="donut-svg__text-line2">{title[1]}</tspan>
          </>
        ) : (
          <tspan textAnchor="middle" dominantBaseline="middle" className="donut-svg__text-single-line">{title[0]}</tspan>
        )
      }

    </text>
  );
}
