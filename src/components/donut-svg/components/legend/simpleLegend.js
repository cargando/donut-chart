import React from 'react';

export function DonutSimpleLegend(props) {
  const {
    options,
    hideValues = false,
    onMouseOver,
    isColoredLegend,
    isColoredPercent = false,
    isBlack = true,
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
            className={`donut-legend__simple-option ${isBlack ? 'donut-legend__simple-option-black' : ''}`}
            data-index={index}
            onMouseOver={handleMouseOver}
          >
            {
              isColoredLegend && <span className="donut-legend__colored-box" style={{backgroundColor: item.color}} />
            }
            <span className="donut-legend__simple-option-title">{item.title}&nbsp;</span>
            <span className="donut-legend__colored-value" style={isColoredPercent ? {color: item.color} : {fontWeight: "normal"}}>{item.percent}&nbsp;</span>

              {
                !hideValues && (<span>{`(${item.value})`}</span>)
              }
          </div>
        ))
      }
    </div>
  );
}

