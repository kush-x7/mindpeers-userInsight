import NavBar from "../../Common/NavBar/NavBar";
import TitleHoursAccordionInfo from "../../Common/TitleHoursAccordionInfo/TitleHoursAccordionInfo";
import HealthTracker from "../../components/HealthTracker/HealthTracker";
import "./mindBodyConnect.css";
import heartIconPath from "../../svg/heart-svg.svg";
import stepsIconPath from "../../svg/steps-svg.svg";
import humanIconPath from "../../svg/human-svg.svg";
import sleepIconPath from "../../svg/sleep-svg.svg";
import bmrIconPath from "../../svg/bmr-svg.svg";
import Divider from "../../Common/Divider/Divider";
import Recommendation from "../../Common/Recommendation/Recommendation";
import CardContainer from "../../Common/CardContainer/CardContainer";

const HealthTrackerData = [
  {
    icon: heartIconPath,
    count: "122",
    countText: "BPM",
    subTitle: "Resting Heart Rate",
    textColor: "#f14658",
  },
  {
    icon: stepsIconPath,
    count: "110",
    countText: "steps",
    subTitle: "Number of Steps",
    textColor: "#FAD6A6",
  },
  {
    icon: humanIconPath,
    count: "2/12",
    countText: "HR",
    subTitle: "Standing Goal",
    textColor: "#D6FF7F",
  },
  {
    icon: sleepIconPath,
    count: "84",
    countText: "Good",
    subTitle: "Sleep Score",
    textColor: "#FA7CBB",
  },
  {
    icon: bmrIconPath,
    count: "88.36",
    countText: "Good",
    subTitle: "Metabolism Rate",
    textColor: "#737DFE",
  },
];

const MindBodyConnect = () => {
  return (
    <>
      <NavBar title="Mind-Body Connect" />

      <TitleHoursAccordionInfo
        title="About Mind-Body Connect"
        showAccordion={true}
        description="Any time you move your body and shift your posture, you shift your physiology, which, in turn, shifts the activity of your autonomic nervous system. Therefore, you can use movement to shift your emotions and your mood."
        showDescription={true}
      />
      <TitleHoursAccordionInfo
        title="Mindful Minutes"
        // showTitleInfoIcon={true}
        subTitle="weekly"
        // showAccordion={true}
        showInfoIcon={true}
        timeSpent="4hr 30min"
      />
      <div className="health-tracker-card-container">
        {HealthTrackerData.map((card) => {
          return (
            <HealthTracker
              icon={card.icon}
              count={card.count}
              countText={card.countText}
              subTitle={card.subTitle}
              textColor={card.textColor}
            />
          );
        })}
      </div>

      <Divider />

      <div className="recommendation-heading">Recommendations For You</div>
      <CardContainer>
        <Recommendation />
      </CardContainer>
    </>
  );
};

export default MindBodyConnect;
