import React from 'react';
import {Donut} from "./components/donut";
import {DonutTitle} from "./components/donutTitle";
import {DonutSimpleLegend} from "./components/legend";


class DonutSvgChart extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      sortedList: null,
      sourceList: null,
    }

  }

  static getDerivedStateFromProps(props, state) {
    if(state.sourceList !== props.slices) {
      const slicesCopy = [...props.slices];
      let sortedList = slicesCopy.sort(DonutSvgChart.sortList(props.sort || 'ASC'));
      if (!props.isPercentage) {
        sortedList = DonutSvgChart.calcPercents(sortedList)
      }
      return {
        sourceList: props.slices,
        sortedList: DonutSvgChart.makeBackgroundItemFirst(sortedList),
      }
    }

    return null;
  }

  static calcPercents(list) {
    const newList = [];
    const len = list.length;
    let sum = 0;

    for(let i = 0; i < len; i++) {
      sum += list[i].value;
    }
    const onePercent = sum / 100;
    for(let i = 0; i < len; i++) {
      newList[i] = {...list[i]};
      console.log('precent', newList[i].value , onePercent)
      newList[i].precent = (newList[i].value / onePercent).toFixed(2);
    }
  console.log('newList', newList)
    return newList;
  }

  static makeBackgroundItemFirst(list) {
    const len = list.length;
    let i = 0;
    for(; i < len; i++) {
      if(list[i].isBackground) {
        const bgItem = list.splice(i, 1);
        return [...bgItem, ...list];
      }
    }
    return [...list];
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
      slices=[],
      donutBgColor = '#fff',
      bgRingColor = null,
    } = this.props;

    return (
      <div style={{display: 'flex'}}>
        <Donut
          slices={slices}
          diameter={diameter}
          donutBgColor={donutBgColor}
          bgRingColor={bgRingColor}
          strokeWidth={strokeWidth}
          startFrom={startFrom}
          renderTitle={ this.renderTitle(diameter / 2, title) }
        />
        <DonutSimpleLegend
          options={this.state.sortedList}
        />
      </div>
    );
  }
}

export default DonutSvgChart;
