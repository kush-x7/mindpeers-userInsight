import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import "./singleGraphCard.css";
import sadEmoji from "../../svg/sad-icon.svg";
import happyEmoji from "../../svg/happy-emoji.svg";

const SingleRadialBar = () => {
  const [series, setSeries] = useState([50]);
  const [options, setOptions] = useState({
    responsive: [
      {
        breakpoint: undefined,
        options: {
          chart: {
            width: "100%",
            height: "100%",
          },
        },
      },
    ],

    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        // reverse: true,

        hollow: {
          margin: 0,
          size: "80%",
          background: "transparent",
          //   position: "back",
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24,
          },
        },

        track: {
          background: "#363636",
          //   strokeWidth: "80%",
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: false,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35,
          },
        },

        dataLabels: {
          show: true,

          name: {
            offsetY: "-25",
            show: true,
            color: "#888",
            fontSize: "17px",
          },
          value: {
            show: false,
          },
        },
      },
    },

    fill: {
      type: "gradient",
      colors: ["#D6FF7F"],
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: ["#00B3CC"],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
    },

    labels: ["Mood Meter"],

    // grid: {
    //   padding: {
    //     top: -10,
    //   },
    // },
  });

  return (
    <div className="chart-card-container">
      <div id="card">
        <div id="chart">
          <ReactApexChart options={options} series={series} type="radialBar" />
        </div>
      </div>
      <div className=" ending-emoji emoji-text-container">
        <img src={sadEmoji} alt="sad-emoji" />
        <div className="emoji-text">Zone of Languishing</div>
      </div>
      <div className="starting-emoji emoji-text-container">
        <img src={happyEmoji} alt="sad-emoji" />
        <div className="emoji-text">Zone of Flourishing</div>
      </div>
    </div>
  );
};

export default SingleRadialBar;
