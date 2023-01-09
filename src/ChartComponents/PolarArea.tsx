import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const PolarArea = () => {
  const [series, setSeries] = useState([100, 60, 100, 50, 80, 50, 10, 40]);

  const [options, setOptions] = useState({
    fill: {
      opacity: 0.8,
      colors: [
        ({ value }: any) => {
          if (value > 90) {
            return "#9055FF";
          }
          if (value > 50 && value < 90) {
            return "#FFCAC9";
          } else {
            return "rgba(225, 225, 225, 0.6)";
          }
        },
      ],
    },
    responsive: [
      {
        breakpoint: undefined,
        options: {
          chart: {
            width: "100%",
          },
          // legend: {
          //   // show: false,
          //   // position: "bottom",
          // },
        },
      },
    ],
    startAngle: 270,
  });

  console.log(typeof options.fill.colors);
  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="polarArea" />
    </div>
  );
};

export default PolarArea;
