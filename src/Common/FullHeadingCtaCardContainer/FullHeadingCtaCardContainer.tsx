import RadialBar from "../../ChartComponents/RadialBar/RadialBar";
import CardContainer from "../CardContainer/CardContainer";
import GraphCardContainer from "../GraphCardContainer/GraphCardContainer";
import "./fullHeadingCtaCard.css";

const FullHeadingCtaCardContainer = ({ mainHeading, cta, graph }: any) => {
  return (
    <>
      <div className="complete-card-container--wrapper">
        <div className="heading-section">
          {mainHeading && (
            <div className="complete-card--heading">{mainHeading}</div>
          )}

          {cta && <div className="complete-card--cta">{cta}</div>}
        </div>

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
