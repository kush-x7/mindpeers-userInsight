import ActivityFlow from "../../Common/ActivityFlow/ActivityFlow";
import Divider from "../../Common/Divider/Divider";
import NavBar from "../../Common/NavBar/NavBar";
import Recommendation from "../../Common/Recommendation/Recommendation";
import TitleHoursAccordionInfo from "../../Common/TitleHoursAccordionInfo/TitleHoursAccordionInfo";
import Toolkit from "../../Common/Toolkit/Toolkit";

import "./myZoneOfFLow.css";

const MyZoneOfFlow = ({ navTitle }: any) => {
  return (
    <>
      <NavBar title={navTitle} />

      <ActivityFlow />
      <TitleHoursAccordionInfo
        title="About My Zone of Flow"
        showAccordion={true}
        description="In this zone much of your time is spent doing activities/ tasks/ behaviors that are so engaging to you that you lose track of time. The experience of flow in everyday life is an important component of wellbeing. It is as a key aspect of eudaimonia, or self-actualization, in an individual. Since it is intrinsically rewarding, the more you practice it, the more you seek to replicate these experiences, which help lead to a fully engaged and happy life."
        infoDescription="Total time Spent in the week on tools"
      />

      <TitleHoursAccordionInfo
        title="My Flow Streak"
        timeSpent="4hr 30min"
        subTitle="Weekly"
        showTitleInfoIcon={true}
        showAccordion={true}
        infoDescription="Total time Spent in the week on tools"
      />

      <TitleHoursAccordionInfo
        title="Global Streak"
        showTitleInfoIcon={true}
        timeSpent="7hr 30min"
        subTitle="Weekly"
        showAccordion={true}
        infoDescription="Benchmark to average mindpeers users"
      />

      <Toolkit />

      <Divider />

      <Recommendation />
    </>
  );
};

export default MyZoneOfFlow;
