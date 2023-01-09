import Divider from "../../Common/Divider/Divider";
import HeadingTextNumber from "../../Common/HeadingTextNumber/HeadingTextNumber";
import NavBar from "../../Common/NavBar/NavBar";
import Recommendation from "../../Common/Recommendation/Recommendation";
import TitleHoursAccordionInfo from "../../Common/TitleHoursAccordionInfo/TitleHoursAccordionInfo";

const MyTherapyJourney = ({ navTitle }: any) => {
  const smallTextNumberArray = [
    {
      title: "My Mental health advocacy footprint",
      paragraph: "No. of times Gift a Therapy used",
      number: 10,
    },
    {
      title: "Global Benchmark",
      paragraph: "Comparison to average mindpeers users",
      number: 10,
    },
  ];

  const CopingZoneArray = [
    {
      title: "Coping Zone",
      paragraph: "Coping Zone",
      number: "1hr 40min",
    },
    {
      title: "Global Proactive Coping Zone",
      paragraph: "Comparison to average mindpeers users",
      number: "3hr 40min",
    },
  ];

  return (
    <>
      <NavBar title={navTitle} />

      <TitleHoursAccordionInfo
        title="About My Therapy Journey"
        showAccordion={true}
        description="Your effort to get ahead of your current stressors and deal with future obstacles effectively; thereby making you better equipped for future obstacles"
        // gameTimeList={[{}]}
      />

      <HeadingTextNumber
        mainHeading="Therapy Footprint "
        cardHeading="My Mental health advocacy footprint"
        smallTextNumberArray={[
          {
            paragraph: "Number of therapy sessions conducted since app sign up",
            number: 10,
          },
        ]}
        // isSmallNumber={true}
      />
      <HeadingTextNumber
        // mainHeading="Therapy Footprint "
        cardHeading="My Mental health advocacy footprint"
        smallTextNumberArray={smallTextNumberArray}
        isSmallNumber={true}
      />

      <HeadingTextNumber
        // mainHeading="Therapy Footprint "
        cardHeading="My Mental health advocacy footprint"
        smallTextNumberArray={CopingZoneArray}
        isSmallNumber={true}
      />

      <Divider />
      <Recommendation />
    </>
  );
};

export default MyTherapyJourney;
