import React from 'react';

export function DonutTitle(props) {
  const {xPos, yPos, title} = props;
  return (
    <text className="donut-svg__text" x={xPos} y={yPos} style={{textAnchor:'middle'}} >
      <tspan className="donut-svg__text-val">{title}</tspan>
    </text>
  );
}
