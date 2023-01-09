import "./ctaAndTitle.css";
const CtaAndTitle = ({ mainHeading, cta }: any) => {
  return (
    <>
      <div className="heading-section">
        {mainHeading && (
          <div className="complete-card--heading">{mainHeading}</div>
        )}

        {cta && <div className="complete-card--cta">{cta}</div>}
      </div>
    </>
  );
};

export default CtaAndTitle;
