import CardContainer from "../../Common/CardContainer/CardContainer";
import "./HealthTracker.css";

const HealthTracker = ({
  icon,
  count,
  countText,
  subTitle,
  textColor,
}: any) => {
  const customStyle = {
    color: textColor,
  };
  return (
    <CardContainer>
      <div className="health-tracker-card">
        <div className="health-tracker-title">
          {icon && (
            <div className="health-tracker-title-icon">
              <img src={icon} alt="icon" />
            </div>
          )}
          {count && (
            <div
              className="health-tracker-title-count-number"
              style={customStyle}
            >
              {count}
            </div>
          )}

          {countText && (
            <span className="health-tracker-title-count-text">{countText}</span>
          )}
        </div>

        {subTitle && (
          <div className="health-tracker-sub-title" style={customStyle}>
            {subTitle}
          </div>
        )}
      </div>
    </CardContainer>
  );
};

export default HealthTracker;
