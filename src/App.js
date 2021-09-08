import Donut from './components/donut-chart';
import DonutSvg from './components/donut-svg';

const slices = [
  {
    color: '#d2d3d4', // '#3746E0',
    isBackground: true,
  },
  {
    color: '#009688',
    title: 'Marvel',
    size: '25',
    highlightOnHover: true,
    renderTitle: () => null,
  },
  {
    color: '#ce843e',
    title: 'Alaska',
    size: '13',
    highlightOnHover: false,
    renderTitle: () => null,
  },
  {
    color: '#005577',
    title: 'Santa Maria',
    size: '1',
    highlightOnHover: false,
    renderTitle: () => null,
  },
]

function App() {
  return (
    <>
        <Donut />
        <DonutSvg
          title="Some text"
          slices={slices}
          strokeWidth={17}
          diameter={190}
          hideLegend={false}
          hideExtraInfo={true}
          onDonutHover={()=> null}
          onLegendHover={()=> null}
          onSlicesHover={() => null}
          highlightHover={false}

        />
    </>
  );
}

export default App;
