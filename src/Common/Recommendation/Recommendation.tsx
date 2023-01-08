import "./recommendation.css";
import recommendationSvgPath from "../../../public/recommendation-svg.svg";

const Recommendation = () => {
  return (
    <>
      <div className="recommendation-container">
        <div className="content">
          <div className="micro-lesson">Micro Lessons</div>
          <div className="lessons-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="get-started">Get Started</div>
        </div>
        <div className="icon-container">
          <img src={recommendationSvgPath} alt="icon" />
        </div>
      </div>
    </>
  );
};

export default Recommendation;
