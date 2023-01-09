import "./cardContainer.css";

const CardContainer = ({ children, hideBackground, customPadding }: any) => {
  const CustomStyle = {
    padding: customPadding,
  };
  return (
    <div
      className={`card-container ${hideBackground ? "" : "show-background"} `}
      style={CustomStyle}
    >
      {children}
    </div>
  );
};

export default CardContainer;
