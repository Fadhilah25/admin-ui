import { BarChart } from "@mui/x-charts/BarChart";

const chartSetting = {
  yAxis: [
    {
      label: "Amount",
      width: 60,
    },
  ],
  height: 300,
};

export default function BarsDataset(props) {
  const { dataset } = props;

  return (
    <BarChart
      dataset={dataset.data}
      xAxis={[{ dataKey: dataset.dataKey }]}
      series={dataset.series}
      {...chartSetting}
    />
  );
}
