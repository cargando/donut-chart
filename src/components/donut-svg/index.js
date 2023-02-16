import React from 'react';
import {Donut} from "./components/donut";
import {DonutTitle} from "./components/donutTitle";
import {DonutExtraLegend, DonutSimpleLegend, ExtraInfo} from "./components/legend";


class DonutSvgChart extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      sortedList: [],
      sourceList: [],
      checked: -1,
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

  handleChangeExtraOption = (e) => {
    const checked = e.currentTarget.getAttribute('data-index');
    this.setState({checked});
  }

  renderTitle = (radius, title) => () =>  (<DonutTitle xPos={radius} yPos={radius} title={title}/>);

  renderLegend = () => {

  }

  render() {
    const {
      title,
      diameter = 116,
      strokeWidth = 16,
      startFrom = this.getRandomArbitrary(80, 100),
      donutBgColor = '#fff',
      bgRingColor = null,
      isPercentage = false,
      isColoredLegend = false,
      extraInfoLegend = false,
      hideLegend = false,
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
        {
          !hideLegend && extraInfoLegend ? (
            <>
              <DonutExtraLegend
                options={this.state.sortedList}
                checked={this.state.checked}
                isColoredLegend={isColoredLegend}
                onChange={this.handleChangeExtraOption}
              />
              {
                this.state.sortedList && this.state.checked >= 0 && (
                  <ExtraInfo
                    title={this.state.sortedList[this.state.checked].title}
                    list={this.state.sortedList[this.state.checked].extraInfo}
                  />)
              }
            </>
          ) :
            !hideLegend && (
            <DonutSimpleLegend
              options={this.state.sortedList}
              hideValues={isPercentage}
              isColoredLegend={isColoredLegend}
            />)

        }

      </div>
    );
  }
}

export default DonutSvgChart;
