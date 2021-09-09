import React from 'react';

export function DonutSimpleLegend(props) {
  const {
    options,
    hideValues = false,
    onMouseOver
  } = props;

  const handleMouseOver = (e) => {
    if (!onMouseOver) {
      return;
    }
    onMouseOver(e.target.getAttribute('data-index'));
  }
  return (
    <div className="donut-legend">
      {
        options.map((item, index) => (
          <div
            key={index}
            className="donut-legend__simple-option"
            data-index={index}
            onMouseOver={handleMouseOver}
          >
            {item.title}&nbsp;
            <span className="donut-legend__colored-value">{item.percent}</span>
            {
              !hideValues && `(${item.value})`
            }
          </div>
        ))
      }
    </div>
  );
}

