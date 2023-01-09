import CardContainer from "../CardContainer/CardContainer";
import CtaAndTitle from "../CtaAndTitle/CtaAndTitle";
import "./FullHorizontalCardContainer.css";
import mantraIcon from "../../svg/mantraIcon.svg";

const FullHorizontalCardContainer = ({
  mainHeading,
  cta,
  graph,
  showTitleWithIcon,
}: any) => {
  const cardList = [{}, {}];
  return (
    <>
      <div className="horizontal-card-container-wrapper">
        <CtaAndTitle mainHeading={mainHeading} cta={cta} />
        <div className="horizontal-card-container">
          {!showTitleWithIcon &&
            cardList.map(() => {
              return (
                <CardContainer customPadding="20px 16px 16px 16px">
                  <div className="horizontal-card-heading">
                    Belongingness Score
                  </div>
                  <div className="horizontal-card-score-wrapper">
                    <div className="score-number">0</div>
                    <div className="score-weekly-text">Weekly</div>
                  </div>
                  <div className="get-started">Get Started</div>
                </CardContainer>
              );
            })}

          {showTitleWithIcon &&
            cardList.map(() => {
              return (
                <CardContainer customPadding="20px 16px 16px 16px">
                  <div className="icon-text-container-wrapper">
                    <div className="horizontal-card-icon">
                      <img src={mantraIcon} alt="icon" />
                    </div>
                    <div className="horizontal-card-text-content">
                      <div className="total">Total</div>
                      <div className="sub-title">0 Mantra</div>
                    </div>
                  </div>
                  <div className="get-started u-top-margin-16">
                    Set Your Mantra
                  </div>
                </CardContainer>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default FullHorizontalCardContainer;
