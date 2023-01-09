import CardContainer from "../CardContainer/CardContainer";
import CtaAndTitle from "../CtaAndTitle/CtaAndTitle";
import "./FullHorizontalCardContainer.css";

const FullHorizontalCardContainer = ({ mainHeading, cta, graph }: any) => {
  return (
    <>
      <div className="horizontal-card-container-wrapper">
        <CtaAndTitle mainHeading={mainHeading} cta={cta} />
        <div className="horizontal-card-container">
          <CardContainer customPadding="20px 16px 16px 16px">
            <div className="horizontal-card-heading">Belongingness Score</div>
            <div className="horizontal-card-score-wrapper">
              <div className="score-number">0</div>
              <div className="score-weekly-text">Weekly</div>
            </div>
            <div className="get-started">Get Started</div>
          </CardContainer>

          <CardContainer customPadding="20px 16px 16px 16px">
            <div className="horizontal-card-heading">My Allyship Level</div>
            <div className="horizontal-card-score-wrapper">
              <div className="score-number">0</div>
              <div className="score-weekly-text">Medium</div>
            </div>
            <div className="get-started">Get Started</div>
          </CardContainer>
        </div>
      </div>
    </>
  );
};

export default FullHorizontalCardContainer;
