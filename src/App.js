import DonutSvg from './components/donut-svg';

const extraInfo = [
  {title: 'Tesla', acronim: 'TSLA', link: 'https://www.tesla.com', value: 50.97},
  {title: 'Alibaba', acronim: 'BABA', link: 'https://www.tesla.com', value: 3.66},
  {title: 'Beyond Meat', acronim: 'BYND', link: 'https://www.tesla.com', value: 3.17},
  {title: 'Amazon', acronim: 'AMZN', link: 'https://www.tesla.com', value: 79.82},
]

const slices = [
  {
    color: '#009688',
    title: 'Marvel',
    value: '25',
    renderTitle: () => null,
    extraInfo,
  },
  {
    color: '#ce843e',
    title: 'Alaska',
    value: '13',
    renderTitle: () => null,
    extraInfo,
  },
  {
    color: '#005577',
    title: 'South Pole',
    value: '18',
    renderTitle: () => null,
    extraInfo,
  },
  {
    color: '#f05d77',
    title: 'North Pole',
    value: '4',
    renderTitle: () => null,
    extraInfo,
  },
]

function App() {
  return (
    <>
        <br /><br /><br />
        <DonutSvg
          title={[21, 'Stock']}
          slices={slices}
          strokeWidth={17}
          diameter={190}
          bgRingColor={'#efefef'}
          hideLegend={false}
          hideExtraInfo={false}
          onDonutHover={()=> null}
          onLegendHover={()=> null}
          onSlicesHover={() => null}
          highlightHover={false}
          startFrom={0}
          isPercentage={false}
          isColoredLegend={true}
          extraInfoLegend={true}
          sort="DSC"
        />
    </>
  );
}

export default App;
