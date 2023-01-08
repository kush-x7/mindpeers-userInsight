import "./divider.css";

const Divider = ({ customHeight }: any) => {
  return <hr className="divider" style={{ height: customHeight }} />;
};

export default Divider;
