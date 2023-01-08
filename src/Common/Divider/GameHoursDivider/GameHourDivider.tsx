import purpleJoyPad from "../../../svg/purple-joypad.svg";
import Divider from "../Divider";
import "./gameHourDivider.css";

const GameHourDivider = () => {
  return (
    <>
      <div className="iconTitleHours">
        <div className="left-box">
          <img src={purpleJoyPad} alt="icon" />

          <div className="iconTitleHour-title">Games</div>
        </div>
        <div className="right-box">1hr</div>
      </div>
      <Divider customHeight="1px" customMargin="0" />
    </>
  );
};

export default GameHourDivider;
