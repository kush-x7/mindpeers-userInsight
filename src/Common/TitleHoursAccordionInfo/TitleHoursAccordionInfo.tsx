import "./TitleHoursAccordionInfo.css";
import { useState } from "react";
import InfoBtn from "../InfoBtn/InfoBtn";
import Accordion from "../Accordion/Accodion";

interface TitleHoursAccordionInfoProp {
  title?: string;
  showTitleInfoIcon?: boolean;
  showAccordion?: boolean;
  timeSpent?: string;
  subTitle?: string;
  hideTitleIcon?: boolean;
  showInfoIcon?: boolean;
  description?: string;
  showDescription?: boolean;
}

const TitleHoursAccordionInfo = ({
  title,
  showAccordion,
  timeSpent,
  subTitle,
  hideTitleIcon,
  showInfoIcon,
  showTitleInfoIcon,
  description,
}: TitleHoursAccordionInfoProp) => {
  const [isInfoVisible, setInfoVisible] = useState(false);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  //   const [isAccordionVisible, setIsAccordion] = useState(false);

  return (
    <div className="container">
      <div className="title-and-time-row">
        <div className="title-column">
          {title && (
            <div className="title">
              {title}
              {showTitleInfoIcon && (
                <InfoBtn state={isInfoVisible} setState={setInfoVisible} />
              )}
            </div>
          )}

          {subTitle && <div className="sub-title">{subTitle}</div>}
        </div>

        <div className="time-spent-column">
          {timeSpent && <div className="time-spent ">{timeSpent}</div>}
          {showAccordion && (
            <Accordion
              state={isDescriptionVisible}
              setState={setIsDescriptionVisible}
            />
          )}
          {showInfoIcon && (
            <InfoBtn state={isInfoVisible} setState={setInfoVisible} />
          )}
        </div>
      </div>

      {isDescriptionVisible && (
        <div className="description-row">
          {description && <div className="description">{description}</div>}
        </div>
      )}

      <div
        className={` ${
          isInfoVisible ? "show-info-container " : "hide-info-container "
        }`}
      >
        <hr className="divider" />

        <div className="explain-info-row">
          <div className="info-section">
            <InfoBtn />
            <div className="info-text">Total time Spent on mindful minutes</div>
          </div>
          <div
            className="close-button"
            onClick={() => {
              setInfoVisible(false);
            }}
          >
            Got It
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleHoursAccordionInfo;
