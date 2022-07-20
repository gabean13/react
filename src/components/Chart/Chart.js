import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
  const dataPointsValues = props.dataPoints.map(dataPoints => dataPoints.value);
  const dataPointsMaxValue = Math.max(...dataPointsValues);

  {console.log(dataPointsMaxValue);}

    return (
      <div className="chart">
      {props.dataPoints.map((dataPoints) => (
        <ChartBar
          key={dataPoints.label}
          value={dataPoints.value}
          maxValue={dataPointsMaxValue}
          label={dataPoints.label}
        />
      ))}
    </div>
    )
}

export default Chart;