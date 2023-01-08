import noDataIconPath from "../../svg/no-data-found-svg.svg";
import CardContainer from "../CardContainer/CardContainer";
import "./noDataFound.css";

const NoDataFound = () => {
  return (
    <>
      <div className="no-data-heading">Mindful MInutes</div>

      <CardContainer>
        <div className="no-data-found-container">
          <div className="image-container">
            <img src={noDataIconPath} alt="icon" />
          </div>
          <div className="no-data-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet
          </div>
          <div className="no-data-get-started">Get Started</div>
        </div>
      </CardContainer>
    </>
  );
};

export default NoDataFound;
