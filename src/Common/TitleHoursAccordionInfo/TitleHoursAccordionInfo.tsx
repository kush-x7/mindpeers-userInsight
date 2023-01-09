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

  gameTimeList?: any;
}

const TitleHoursAccordionInfo = ({
  title,
  showTitleInfoIcon,
  subTitle,
  timeSpent,
  showInfoIcon,
  showAccordion,
  description,
  infoDescription,
  gameTimeList,
}: TitleHoursAccordionInfoProp) => {
  const [isInfoVisible, setInfoVisible] = useState(false);
  const [isGAmeTimeVisible, setGameTimeVisible] = useState(false);
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
                isDescriptionAvailable={description}
                isGameTimeSpentDataAvailable={gameTimeList}
                descriptionState={isDescriptionVisible}
                setDescriptionState={setIsDescriptionVisible}
                gameTimeState={isGAmeTimeVisible}
                setGameTimeState={setGameTimeVisible}
              />
            )}
            {showInfoIcon && (
              <InfoBtn state={isInfoVisible} setState={setInfoVisible} />
            )}
          </div>
        </div>

        {isDescriptionVisible && (
          <div className="description-row">
            <div className="description">{description}</div>
          </div>
        )}

        {(isInfoVisible || isGAmeTimeVisible) && (
          <div className="show-info-container ">
            <Divider customHeight="1px" />

            {isInfoVisible && (
              <CardContainer>
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
              </CardContainer>
            )}

            {isGAmeTimeVisible && (
              <div className="show-game-hour-container">
                {gameTimeList.map((data: any, index: any) => {
                  return <GameHourDivider key={index} />;
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </CardContainer>
  );
};

export default TitleHoursAccordionInfo;
