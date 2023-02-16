import React from 'react';

export function ExtraInfo(props) {
  const {
    title = '',
    list,
  } = props;

  console.log("list", list)
  return (
    <div className="donut-legend__extra-info">
      <div className="donut-legend__extra-info-header">Major holdings in&nbsp;
        <span className="donut-legend__extra-info-header_bold">{title}</span>
      </div>
      <div className="donut-legend__extra-info-line" />
      <div className="donut-legend__extra-info-body">
        <div className="donut-legend__extra-info-string">
          <div className="donut-legend__extra-left-col donut-legend__extra-info-col_header">Company Name</div>
          <div className="donut-legend__extra-info-right-col donut-legend__extra-info-col_header">Market Cap</div>
        </div>
        {
          list.map((item, index) => {
            const  {
              title,
              acronym,
              link,
              value
            } = item;

            return (
              <div className="donut-legend__extra-info-string">
                <div className="donut-legend__extra-left-col">
                  { index + 1 }.&nbsp;
                  {title}&nbsp;
                  (<a href={link}>{acronym}</a>)
                </div>
                <div className="donut-legend__extra-info-right-col">{value}</div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

