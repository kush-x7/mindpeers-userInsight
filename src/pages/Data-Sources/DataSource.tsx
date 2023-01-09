import CardContainer from "../../Common/CardContainer/CardContainer";
import ConnectionCard from "../../Common/ConnectionCard/ConnectionCard";
import NavBar from "../../Common/NavBar/NavBar";
import "./dataSource.css";

const DataSource = ({ navTitle }: any) => {
  return (
    <>
      <NavBar title={navTitle} />

      <div className="data-source-content-container">
        <div className="data-source-heading">How It Works</div>
        <div className="data-source-details">
          <div>
            <div className="data-source-sub-heading">Lorem Ipsum</div>
            <div className="data-source-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea.
            </div>
          </div>
          <div>
            <div className="data-source-sub-heading">Lorem Ipsum</div>
            <div className="data-source-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea.
            </div>
          </div>
        </div>
      </div>
      <div className="data-source-heading">Connections</div>
      <ConnectionCard />
      <ConnectionCard />
      <ConnectionCard />
    </>
  );
};

export default DataSource;
