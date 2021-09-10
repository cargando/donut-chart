import React from 'react';
import {Donut} from "./components/donut";
import {DonutTitle} from "./components/donutTitle";
import {DonutSimpleLegend} from "./components/legend";


class DonutSvgChart extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      sortedList: [],
      sourceList: [],
    }

  }

  static getDerivedStateFromProps(props, state) {
    if(state.sourceList !== props.slices) {
      const slicesCopy = [...props.slices];
      const sortedList = slicesCopy.sort(DonutSvgChart.sortList(props.sort || 'ASC'));
      return {
        sourceList: props.slices,
        sortedList: DonutSvgChart.checkPercents(sortedList, props.isPercentage),
      }
    }

    return null;
  }

  static checkPercents(list, isPercentage) {
    const newList = [];
    const len = list.length;
    let sum = 0;

    for(let i = 0; i < len; i++) {
      sum += +list[i].value;
      newList[i] = {...list[i]};
      newList[i].percent = +list[i].value;
    }
    if (isPercentage) {
      return newList;
    }
    console.log('Sum', sum);
    const onePercent = sum / 100;
    for(let i = 0; i < len; i++) {
      console.log('percent', newList[i].value , onePercent)
      newList[i].percent = (newList[i].value / onePercent).toFixed(2);
    }
  console.log('newList', newList)
    return newList;
  }

  static sortList(order) {
    return function (a, b) {
      if (a.isBackground || b.isBackground) {
        return 0;
      }
      return order === 'ASC' ? a.value - b.value : b.value - a.value;
    }
  }

  getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
  }

  renderTitle = (radius, title) => () =>  (<DonutTitle xPos={radius} xPos={radius} title={title}/>);

  render() {
    const {
      title,
      diameter = 116,
      strokeWidth = 16,
      startFrom = this.getRandomArbitrary(80, 100),
      donutBgColor = '#fff',
      bgRingColor = null,
      isPercentage = false
    } = this.props;

    return (
      <div style={{display: 'flex', alignItems: 'center'}}>
        <Donut
          slices={this.state.sortedList}
          diameter={diameter}
          donutBgColor={donutBgColor}
          bgRingColor={bgRingColor}
          strokeWidth={strokeWidth}
          startFrom={startFrom}
          renderTitle={ this.renderTitle(diameter / 2, title) }
        />
        <DonutSimpleLegend
          options={this.state.sortedList}
          hideValues={isPercentage}
        />
      </div>
    );
  }
}

export default DonutSvgChart;
