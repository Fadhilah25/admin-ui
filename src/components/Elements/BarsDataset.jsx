import { useContext } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { ThemeContext } from "../../context/themeContext";

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
  const { theme: themeMode } = useContext(ThemeContext);

  // Update series colors with current theme
  const updatedSeries = dataset.series.map((serie, index) => ({
    ...serie,
    color: index === 1 ? themeMode.color : "#E8E8E8",
  }));

  return (
    <BarChart
      dataset={dataset.data}
      xAxis={[{ dataKey: dataset.dataKey }]}
      series={updatedSeries}
      {...chartSetting}
    />
  );
}
