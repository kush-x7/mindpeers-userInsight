import RadialBar from "../../ChartComponents/RadialBar/RadialBar";
import Divider from "../../Common/Divider/Divider";
import FullHeadingCtaCardContainer from "../../Common/FullHeadingCtaCardContainer/FullHeadingCtaCardContainer";
import FullHorizontalCardContainer from "../../Common/FullHorizontalCardContainer/FullHorizontalCardContainer";
import NavBar from "../../Common/NavBar/NavBar";
import Recommendation from "../../Common/Recommendation/Recommendation";

const UserInsights = () => {
  return (
    <>
      <NavBar title="User Insights" showBackBtn={false} />

      <FullHeadingCtaCardContainer
        mainHeading="My Strength Blueprint"
        cta="Explore More"
        graph={<RadialBar />}
      />

      <Recommendation heading="Recommendation on the basis of  your Strength Blue print" />

      <Divider customHeight="1px" />

      <FullHorizontalCardContainer
        mainHeading="My Vulnerability Power"
        cta="Explore More"
      />

      <Divider customHeight="1px" />

      <FullHeadingCtaCardContainer
        mainHeading="My Learned Optimism"
        cta="Explore More"
        graph={<RadialBar />}
      />
    </>
  );
};

export default UserInsights;
