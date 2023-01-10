import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ColumnChart = () => {
  const [series, setSeries] = useState([
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
  ]);

  const [options, setOptions] = useState({
    toolbar: {
      show: false,
    },

    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },

    dataLabels: {
      enabled: false,
    },

    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      enabled: false,
    },
  });
  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="bar" />
    </div>
  );
};

export default ColumnChart;
