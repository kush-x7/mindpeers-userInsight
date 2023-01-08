import NavBar from "../../Common/NavBar/NavBar";
import TitleHoursAccordionInfo from "../../Common/TitleHoursAccordionInfo/TitleHoursAccordionInfo";
import "./mindBodyConnect.css";
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
    </>
  );
};

export default MindBodyConnect;
