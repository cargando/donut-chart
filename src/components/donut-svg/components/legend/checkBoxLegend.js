import React from 'react';

export function DonutCheckBoxLegend(props) {
  const {
    options,
    hideValues = false,
    checked,
    onClick
  } = props;

  return (
    <div className="donut-legend donut-legend__left-space">
      {
        options.map((item, index) => (
          <div
            key={index}
            className={`donut-legend__checkbox-option ${checked === index ? 'donut-legend__checkbox-option_checked' : ''}`}
            onClick={onClick}
            data-index={index}
          >
            <input type="radio" checked={checked === index} className="donut-legend__option-radio"/>
            <div className="donut-legend__option-text">{item.percent} {item.title}</div>
            {
              !hideValues && (
                <div className="donut-legend__option-value">{`(${item.value})`}</div>
              )
            }
          </div>
        ))
      }
    </div>
  );
}

