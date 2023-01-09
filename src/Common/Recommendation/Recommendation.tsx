import "./recommendation.css";
import recommendationSvgPath from "../../svg/recommendation-svg.svg";
import CardContainer from "../CardContainer/CardContainer";

const Recommendation = ({ heading = "Recommendations For You" }: any) => {
  return (
    <>
      <div className="recommendation-heading">{heading}</div>

      <CardContainer>
        {" "}
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
      </CardContainer>
    </>
  );
};

export default Recommendation;
