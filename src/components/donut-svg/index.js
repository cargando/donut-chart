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
    startFrom = getRandomArbitrary(4.5, 7),
    slices=[],
    donutBgColor = '#fff',
  } = props;

  const radius = (diameter / 2);
  const pieRadius = radius - strokeWidth / 2
  const ringRadius = radius - strokeWidth;
  const ringCircumference = pieRadius * 2  * Math.PI;

  const renderSlice = (item, index) => {
    const {
      size = 100,
      color,
      isBackground = false,
    } = item;

    const strokeVal = ringCircumference / 100 * size;
    const strokeDasharray = (strokeVal + ' ' + ringCircumference);

    let strokeDashoffset = 5;

    console.log('Item ', index, 'size', size, 'isBackground', isBackground, 'CR',ringCircumference, 'offset', strokeDashoffset)
    console.log('diameter', diameter, 'strokeVal=', parseInt(strokeVal), 'strokeDasharray', strokeDasharray.split(' '))

    // Circumference − All preceding segments’ total length + First segment’s offset = Current segment offset
    // Plugging in our numbers, we have:
    // 100 − 85 + 25 = 40


    return (
      <circle
        key={index}
        r={pieRadius}
        cx={radius}
        cy={radius}
        stroke={color}
        strokeWidth={`${strokeWidth}px`}
        strokeDasharray={strokeDasharray}
        strokeDashoffset={ isBackground ? 0 : strokeDashoffset}
        fill="transparent"
      />);
  }

/*
  <circle class="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
  <circle class="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4" stroke-width="3"></circle>

  <circle class="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#ce4b99" stroke-width="3"
          stroke-dasharray="85 15" stroke-dashoffset="0"></circle>
 */
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

/*
      <circle r={ringRadius} cx={radius} cy={radius} transform={rotateVal} style={trackStyle} className="donut-svg__track"/>
      <circle r={ringRadius} cx={radius} cy={radius} transform={rotateVal} style={indicatorStyle} className="donut-svg__indicator"/>


    <svg width={diameter} height={diameter} className="donut-svg__chart">
      {
        slices.map(renderSlice)
      }
      <text className="donut-svg__text" x={radius} y={radius} style={{textAnchor:'middle'}} >
        <tspan className="donut-svg__text-val">{title}</tspan>
      </text>
    </svg>
 */
