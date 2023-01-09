import RadialBar from "../../ChartComponents/RadialBar/RadialBar";
import CardContainer from "../CardContainer/CardContainer";
import CtaAndTitle from "../CtaAndTitle/CtaAndTitle";
import GraphCardContainer from "../GraphCardContainer/GraphCardContainer";
import "./fullHeadingCtaCard.css";

const FullHeadingCtaCardContainer = ({ mainHeading, cta, graph }: any) => {
  return (
    <>
      <div className="complete-card-container--wrapper">
        <CtaAndTitle mainHeading={mainHeading} cta={cta} />

        {graph && (
          <GraphCardContainer hideBackground={false}>
            {graph}
          </GraphCardContainer>
        )}
      </div>
    </>
  );
};

export default FullHeadingCtaCardContainer;
