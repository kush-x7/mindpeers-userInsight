import { useState } from "react";
import Chart from "react-apexcharts";

const RadialBar = () => {
  const [options, setOptions] = useState({
    annotations: {
      points: [
        {
          x: "50%",
          y: "50%",
          angle: -90,
          label: {
            borderColor: "#FF4560",
            offsetY: 0,
            style: {
              color: "#ffffff",
              background: "#FF4560",
            },
            text: "Start",
          },
        },
        {
          x: "50%",
          y: "50%",
          angle: 90,
          label: {
            borderColor: "#00DCA5",
            offsetY: 0,
            style: {
              color: "#ffffff",
              background: "#00DCA5",
            },
            text: "End",
          },
        },
      ],
    },

    stroke: {
      curve: "smooth",
      lineCap: "round",
    },
    chart: {
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 2000,
        animateGradually: {
          enabled: true,
          delay: 500,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 250,
        },
      },
    },
    plotOptions: {
      radialBar: {
        size: undefined,
        inverseOrder: true,
        startAngle: -90,
        endAngle: 90,
        offsetX: 0,
        offsetY: 0,
        hollow: {
          size: "50%",
          background: "transparent",
        },
        track: {
          show: true,
          background: "#393939",
          strokeWidth: "100%",
          opacity: 1,
          margin: 5,
        },
        dataLabels: {
          show: true,
          name: {
            show: true,
            fontSize: "22px",
            fontFamily: undefined,
            color: "white",
            offsetY: -10,
          },
          value: {
            show: true,
            fontSize: "16px",
            fontFamily: undefined,
            color: "white",
            offsetY: 16,
            formatter: function (val: any) {
              return val + "%";
            },
          },
          total: {
            show: true,
            label: "Total",
            color: "#373d3f",
            formatter: function (w: any) {
              return (
                w.globals.seriesTotals.reduce((a: any, b: any) => {
                  return a + b;
                }, 0) /
                  w.globals.series.length +
                "%"
              );
            },
          },
        },
      },
    },
  });
  const [series, setSeries] = useState([25, 15, 75, 50, 60]);

  return (
    <div className="donut">
      <Chart options={options} series={series} type="radialBar" width="100%" />
    </div>
  );
};

export default RadialBar;
