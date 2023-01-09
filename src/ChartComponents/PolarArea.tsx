import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const PolarArea = () => {
  const [series, setSeries] = useState([14, 23, 21, 17, 15, 10, 12]);

  const [options, setOptions] = useState({
    stroke: {
      colors: ["#F6F6F6"],
    },
    fill: {
      opacity: 0.8,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: "100%",
          },
          legend: {
            show: false,
            // position: "bottom",
          },
        },
      },
    ],
  });
  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="polarArea" />
    </div>
  );
};

export default PolarArea;
