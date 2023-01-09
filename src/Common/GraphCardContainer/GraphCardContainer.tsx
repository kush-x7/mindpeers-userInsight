import "./graphCardContainer.css";

const GraphCardContainer = ({ children, hideBackground }: any) => {
  return (
    <div
      className={`graph-card-container ${
        hideBackground ? "" : "show-background"
      } `}
    >
      {children}
    </div>
  );
};

export default GraphCardContainer;
