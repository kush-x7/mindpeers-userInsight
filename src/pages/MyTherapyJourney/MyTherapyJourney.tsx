import Divider from "../../Common/Divider/Divider";
import NavBar from "../../Common/NavBar/NavBar";
import Recommendation from "../../Common/Recommendation/Recommendation";
import TitleHoursAccordionInfo from "../../Common/TitleHoursAccordionInfo/TitleHoursAccordionInfo";

const MyTherapyJourney = ({ navTitle }: any) => {
  return (
    <>
      <NavBar title={navTitle} />

      <TitleHoursAccordionInfo
        title="About My Therapy Journey"
        showAccordion={true}
        description="Your effort to get ahead of your current stressors and deal with future obstacles effectively; thereby making you better equipped for future obstacles"
        // gameTimeList={[{}]}
      />

      <Divider />
      <Recommendation />
    </>
  );
};

export default MyTherapyJourney;
