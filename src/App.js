import Donut from './components/donut-chart';
import DonutSvg from './components/donut-svg';

const slices = [
  {
    color: '#009688',
    title: 'Marvel',
    value: '25',
    renderTitle: () => null,
  },
  {
    color: '#ce843e',
    title: 'Alaska',
    value: '13',
    renderTitle: () => null,
  },
  {
    color: '#005577',
    title: 'South Pole',
    value: '18',
    renderTitle: () => null,
  },
  {
    color: '#f05d77',
    title: 'North Pole',
    value: '4',
    renderTitle: () => null,
  },
]

function App() {
  return (
    <>
        <br /><br /><br />
        <DonutSvg
          title="Some text"
          slices={slices}
          strokeWidth={17}
          diameter={190}
          bgRingColor={'#efefef'}
          hideLegend={false}
          hideExtraInfo={true}
          onDonutHover={()=> null}
          onLegendHover={()=> null}
          onSlicesHover={() => null}
          highlightHover={false}
          startFrom={0}
          isPercentage={false}
          sort="DSC"
        />
    </>
  );
}

export default App;
