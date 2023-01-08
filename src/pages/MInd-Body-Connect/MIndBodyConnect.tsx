import { useState } from "react";
import "./mindBodyConnect.css";
const MindBodyConnect = () => {
  const [isInfoVisible, setInfoVisible] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-back-btn-box"></div>
        <div className="navbar-heading">Mind-Body Connect</div>
      </nav>

      <div className="mindful-minutes-container">
        <div className="mindful-minutes-container--first-row">
          <div className="mindful-minutes-first-column">
            <div className="first-column-title">Mindful Minutes</div>
            <div className="first-column-sub-title">Weekly</div>
          </div>
          <div className="mindful-minutes-second-column">
            <div className="second-column-hours-text">4hr 30min</div>
            <div
              className="second-column-info"
              onClick={() => {
                alert(2);
              }}
            >
              <span className="info-text">i</span>
            </div>
          </div>
        </div>

        <div className="mindful-minutes-container--second-row"></div>
      </div>
    </>
  );
};

export default MindBodyConnect;
