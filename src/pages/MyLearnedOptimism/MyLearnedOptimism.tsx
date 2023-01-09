import RadialBar from "../../ChartComponents/RadialBar/RadialBar";
import CardContainer from "../../Common/CardContainer/CardContainer";
import Divider from "../../Common/Divider/Divider";
import HeadingTextNumber from "../../Common/HeadingTextNumber/HeadingTextNumber";
import NavBar from "../../Common/NavBar/NavBar";
import Recommendation from "../../Common/Recommendation/Recommendation";
import TitleHoursAccordionInfo from "../../Common/TitleHoursAccordionInfo/TitleHoursAccordionInfo";

const MyLearnedOptimism = ({ navTitle }: any) => {
  const gratitudeArray = [
    {
      title: "Gratitude Prompt",
      paragraph: "Time capture of when the prompt was attempted",
      number: "1hr 40min",
    },
    {
      paragraph: "Number of times you did a gratitude prompt tool",
      number: "10",
    },
  ];
  return (
    <>
      <NavBar title={navTitle} />
      <TitleHoursAccordionInfo
        title="About My Learned Optimism"
        showAccordion={true}
        description="Learned optimism is about how we interpret the world, it’s not a fixed trait nor part of our disposition. Instead, it can be seen as more of a strategy – an outlook that we can learn to cultivate when we start by challenging our automatic negative thoughts."
      />

      <CardContainer>
        <RadialBar />
      </CardContainer>

      <HeadingTextNumber
        mainHeading="Gratitude Expressive Score"
        smallTextNumberArray={gratitudeArray}
        isSmallNumber={true}
      />

      <Divider />

      <Recommendation />
    </>
  );
};

export default MyLearnedOptimism;
