import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const PolarArea = () => {
  const [series, setSeries] = useState([70, 60, 100, 50, 80, 50, 10, 40]);

  function getMaxValueIndex(series: number[]) {
    return series.indexOf(Math.max(...series));
  }

  function getMinValueIndex(series: number[]) {
    return series.indexOf(Math.min(...series));
  }

  const [options, setOptions] = useState({
    stroke: { show: false },

    polar: {
      fill: {
        background: "yellow",
      },
      // set the border color of the background circles
    },
    // stroke: {
    //   // show: true,
    //   colors: ["#fff"],
    // },

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
        },
      },
    ],

    labels: [
      "Strength 1",
      "Strength 2",
      "Strength 3",
      "Strength 4",
      "Strength 5",
      "Strength 6",
      "Strength 7",
      "Strength 8",
    ],

    dataLabels: {
      enabled: true,
      distributed: false,

      background: {
        enabled: false,
      },
      style: {
        fontSize: "12px",
        fontWeight: "500",
        colors: ["#fff"],

        // colors: [({ strengthIndex }: any) => console.log(strengthIndex)],
      },
    },

    tooltip: {
      enabled: false,
    },

    legend: {
      show: true,
      position: "bottom",
      fontSize: "12px",
      fontFamily: "'SF Pro Text",

      labels: {
        colors: "#E1E1E1",
      },

      formatter: (strengthName: string, opts: any) => {
        if (
          opts.seriesIndex === getMaxValueIndex(series) ||
          opts.seriesIndex === getMinValueIndex(series)
        ) {
          return strengthName;
        }
        return null;
      },

      markers: {
        width: 12,
        height: 12,
        radius: 2,
        formatter: (opts: any) => {
          if (
            opts.seriesIndex === getMaxValueIndex(series) ||
            opts.seriesIndex === getMinValueIndex(series)
          ) {
            return {
              width: 12,
              height: 12,
              radius: 2,
            };
          }
          return null;
        },
      },
    },
  });

  console.log(typeof options.fill.colors);
  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="polarArea" />
    </div>
  );
};

export default PolarArea;
