import React from 'react';
import './styles.scss';

const renderTitle = ({radius, title}) => {
  return title && (
    <text className="donut-svg__text" x={radius} y={radius} style={{textAnchor:'middle'}} >
      <tspan className="donut-svg__text-val">{title}</tspan>
    </text>
  );
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const DonutSvgChart = (props) => {

  const defaultSlice = {
    color: '',
    title: '',
    size: '100',
    highlightOnHover: false,
    renderTitle: () => null,
  }
  const {
    title,
    diameter = 116,
    strokeWidth = 16,
    sort = 'ASC',
    startFrom = getRandomArbitrary(80, 100),
    slices=[],
    donutBgColor = '#fff',
  } = props;

  const radius = (diameter / 2);
  const pieRadius = radius - strokeWidth / 2
  const ringRadius = radius - strokeWidth;
  const ringCircumference = pieRadius * 2  * Math.PI;
  let strokeDashoffset = 0;

  const renderSlice = (item, index) => {
    const {
      size = 100,
      color,
      isBackground = false,
    } = item;

    const strokeVal = ringCircumference / 100 * size;
    const strokeDasharray = (strokeVal + ' ' + ringCircumference);

    const result = (
      <circle
        key={index}
        r={pieRadius}
        cx={radius}
        cy={radius}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={strokeDasharray}
        strokeDashoffset={ isBackground ? 0 : strokeDashoffset}
        transform={`rotate(${startFrom} ${radius} ${radius})`}
        fill="transparent"
      />);

    if (!isBackground) {
      strokeDashoffset-= strokeVal;
    }
    return result;
  }

  return (
    <>
    <div style={{width: `${diameter}px`, height: `${diameter}px`}}>
      <svg width={diameter} height={diameter} viewBox={`0 0 ${diameter} ${diameter}`}  className="donut-svg__chart">
        <circle cx={radius} cy={radius} r={ringRadius} fill={donutBgColor} />
        {
          slices.map(renderSlice)
        }
        {
          renderTitle({radius, title})
        }
      </svg>
    </div>
      </>
  );
}

export default DonutSvgChart;
