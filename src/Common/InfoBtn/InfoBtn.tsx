import "./infoBtn.css";
const InfoBtn = ({ state, setState }: any) => {
  const handleClick = () => {
    if (typeof setState === "function") {
      setState(!state);
    }
  };

  return (
    <span className="info-button" onClick={handleClick}>
      i
    </span>
  );
};

export default InfoBtn;
