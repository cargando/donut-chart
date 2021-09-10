import React from 'react';
import './styles.scss';

export function Donut(props) {
  const {
    slices,
    diameter,
    strokeWidth,
    startFrom,
    renderTitle,
    donutBgColor,
    bgRingColor
  } = props;

  const bgRing = [
    {
      color: bgRingColor,
      isBackground: true,
    }
  ]
  const radius = (diameter / 2);
  const pieRadius = radius - strokeWidth / 2
  const ringRadius = radius - strokeWidth;

  const ringCircumference = pieRadius * 2  * Math.PI;
  let strokeDashoffset = 0;


  const renderSlice = (item, index) => {
    const {
      percent = 100,
      color,
      isBackground = false,
    } = item;

    const strokeVal = ringCircumference / 100 * percent;
    const strokeDasharray = (strokeVal + ' ' + ringCircumference);

    const result = (
      <circle
        key={isBackground ? 'bg' : index}
        r={pieRadius}
        cx={radius}
        cy={radius}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={strokeDasharray}
        strokeDashoffset={ isBackground ? 0 : strokeDashoffset}
        transform={`rotate(${startFrom} ${radius} ${radius})`}
        fill="transparent"
        data-size={percent}
      />);

    if (!isBackground) {
      strokeDashoffset-= strokeVal;
    }
    return result;
  }

console.log('slices', slices)

  return (
    <div style={{width: `${diameter}px`, height: `${diameter}px`, position: 'relative', flexGrow: 0}}>
      <svg width={diameter} height={diameter} viewBox={`0 0 ${diameter} ${diameter}`}  className="donut-svg__chart">
        <circle cx={radius} cy={radius} r={ringRadius} fill={donutBgColor} />
        {
          bgRingColor && bgRing.map(renderSlice)
        }
        {
          slices.map(renderSlice)
        }
        {
          renderTitle && renderTitle()
        }
      </svg>
      </div>
  );
}

export default Donut;
