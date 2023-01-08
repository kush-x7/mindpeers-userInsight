import joyPad from "../../svg/joypad-icon.svg";
import "./activityFlow.css";

const ActivityFlow = () => {
  return (
    <>
      <div className="activityFlow-container">
        <div className="flow-of-the-week-heading">
          My Flow Activity of the Week
        </div>
        <div className="flow-of-the-week-game">
          <div className="icon-container">
            <img src={joyPad} alt="icon" />
          </div>

          <div className="flow-of-the-week-content">
            <div className="flow-of-the-week-title">Game</div>
            <div className="game-name">My Clear Sky</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityFlow;
