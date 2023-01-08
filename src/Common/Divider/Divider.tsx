import "./divider.css";

const Divider = ({ customHeight, customMargin }: any) => {
  return (
    <hr
      className="divider"
      style={{ height: customHeight, margin: customMargin }}
    />
  );
};

export default Divider;
