import React from 'react';

export function DonutExtraLegend(props) {
  const {
    options,
    hideValues = false,
    checked,
    onChange,
    isColoredLegend,
  } = props;

  return (
    <div className={`donut-legend ${isColoredLegend ? 'donut-legend__extra-option-left-space' : 'donut-legend__left-space'}`}>
      {
        options.map((item, index) => (
            <div
              key={index}
              className={`donut-legend__extra-option ${ +checked === index ? 'donut-legend__extra-option_checked' : ''}`}
              onClick={onChange}
              data-index={index}
            >
              <input type="radio" checked={ +checked === index} className="donut-legend__extra-option-radio"/>
              {
                isColoredLegend && <span className="donut-legend__extra-option-colored-box" style={{backgroundColor: item.color}} />
              }
              <span className={`donut-legend__extra-option-text ${ +checked === index ? 'donut-legend__extra-option_checked' : ''}`}>{item.percent} {item.title}</span>
              {
                !hideValues && (
                  <span className={`donut-legend__extra-option-value ${ +checked === index ? 'donut-legend__extra-option_checked' : ''}`} >{`(${item.value})`}</span>
                )
              }
            </div>
          )
        )
      }
    </div>
  );
}

