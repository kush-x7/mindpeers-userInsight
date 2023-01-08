import "./TitleHoursAccordionInfo.css";
import { useState } from "react";
import InfoBtn from "../InfoBtn/InfoBtn";
import Accordion from "../Accordion/Accodion";
import Divider from "../Divider/Divider";
import CardContainer from "../CardContainer/CardContainer";
import GameHourDivider from "../Divider/GameHoursDivider/GameHourDivider";

interface TitleHoursAccordionInfoProp {
  title?: string;
  showTitleInfoIcon?: boolean;
  showAccordion?: boolean;
  timeSpent?: string;
  subTitle?: string;

  showInfoIcon?: boolean;
  description?: string;
  showDescription?: boolean;
  infoDescription?: string;
  showGameHourDivider?: boolean;
  GameHourDividerList?: any;
}

const TitleHoursAccordionInfo = ({
  title,
  showAccordion,
  timeSpent,
  subTitle,
  showInfoIcon,
  showTitleInfoIcon,
  description,
  infoDescription,
  showGameHourDivider,
  GameHourDividerList,
}: TitleHoursAccordionInfoProp) => {
  const [isInfoVisible, setInfoVisible] = useState(false);
  const [isAccordionVisible, setAccordionVisible] = useState(false);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  return (
    <CardContainer>
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

        {isDescriptionVisible && description && (
          <div className="description-row">
            <div className="description">{description}</div>
          </div>
        )}

        <div
          className={` ${
            isInfoVisible ? "show-info-container " : "hide-info-container "
          }`}
        >
          <Divider customHeight="1px" />

          <CardContainer>
            {infoDescription && (
              <div className="explain-info-row">
                <div className="info-section">
                  <InfoBtn />
                  <div className="info-text">{infoDescription}</div>
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
            )}
          </CardContainer>

          {showGameHourDivider && isDescriptionVisible && (
            <div className="show-game-hour-container">
              {GameHourDividerList.map(() => {
                return <GameHourDivider />;
              })}
            </div>
          )}
        </div>
      </div>
    </CardContainer>
  );
};

export default TitleHoursAccordionInfo;
