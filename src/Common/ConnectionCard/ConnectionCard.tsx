import CardContainer from "../CardContainer/CardContainer";
import "./ConnectionCard.css";
import connectionIcon from "../../svg/connection.svg";
import linkIcon from "../../svg/link-icon.svg";

const ConnectionCard = () => {
  return (
    <>
      <CardContainer>
        <div className="connection-wrapper">
          <div className="icon-text-container">
            <div className="connection-icon">
              <img src={connectionIcon} alt="icon" />
            </div>
            <div className="connection-text-box">
              <div className="connection-heading">Fitbit</div>
              <div className="connection-sub-heading">Authorize</div>
            </div>
          </div>
          <div className="connection-icon-link">
            <img src={linkIcon} alt="" />
          </div>
        </div>
      </CardContainer>
    </>
  );
};

export default ConnectionCard;
