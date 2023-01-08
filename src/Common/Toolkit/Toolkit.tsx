import "./Toolkit.css";
import mapPointerIcon from "../../svg/pointer.svg";
import graphIcon from "../../svg/graph-svg.svg";
import toolsIcon from "../../svg/tools-icon.svg";
import joyPadIcon from "../../svg/joypad-icon.svg";
import bookIcon from "../../svg/book-icon.svg";
import humanIcon from "../../svg/human-icon.svg";

const Toolkit = () => {
  return (
    <>
      <div className="toolKit-heading">My Thrive Toolkit</div>
      <table>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>
              <div className="heading-with-icon">
                <img src={mapPointerIcon} alt="icon" /> Most Visited
              </div>
            </th>
            <th>
              <div className="heading-with-icon">
                <img src={graphIcon} alt="icon" /> Trending
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="table-row-heading">
              <div className="heading-with-icon">
                <img src={joyPadIcon} alt="icon" /> <span>Games</span>
              </div>
            </td>
            <td>My Clear Sky</td>
            <td>Memory Game</td>
          </tr>

          <tr>
            <td className="table-row-heading">
              <div className="heading-with-icon">
                <img src={toolsIcon} alt="icon" /> <span>Tools</span>
              </div>
            </td>
            <td>Mantra Tool</td>
            <td>Thought Guides</td>
          </tr>
          <tr>
            <td className="table-row-heading">
              <div className="heading-with-icon">
                <img src={bookIcon} alt="icon" /> <span>Lessons</span>
              </div>
            </td>
            <td>Lorem Ipsum</td>
            <td>Lorem Ipsum</td>
          </tr>
          <tr>
            <td className="table-row-heading">
              <div className="heading-with-icon">
                <img src={humanIcon} alt="icon" /> <span>Clubs</span>
              </div>
            </td>
            <td>Lorem Ipsum</td>
            <td>Lorem Ipsum</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Toolkit;
