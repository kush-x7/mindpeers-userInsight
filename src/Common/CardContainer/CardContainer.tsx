import "./cardContainer.css";

const CardContainer = ({ children, hideBackground }: any) => {
  return (
    <div
      className={`card-container ${hideBackground ? "" : "show-background"} `}
    >
      {children}
    </div>
  );
};

export default CardContainer;
