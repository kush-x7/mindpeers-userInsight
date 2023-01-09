import "./App.css";
import PolarArea from "./ChartComponents/PolarArea";
import DataSource from "./pages/Data-Sources/DataSource";
// import RadialBar from "./ChartComponents/RadialBar/RadialBar";
import MindBodyConnect from "./pages/MInd-Body-Connect/MIndBodyConnect";
import MyLearnedOptimism from "./pages/MyLearnedOptimism/MyLearnedOptimism";
import MyTherapyJourney from "./pages/MyTherapyJourney/MyTherapyJourney";
import MyZoneOfFlow from "./pages/MyZoneOfFlow/MyZoneOfFlow";
import UserInsights from "./pages/UserInsights/UserInsights";

function App() {
  return (
    <>
      <div className="app-container">
        {/* <PolarArea /> */}
        <UserInsights />
        {/* <DataSource navTitle="Data Sources" /> */}
        {/* <MindBodyConnect navTitle="Mind-Body Connect" /> */}
        {/* <MyZoneOfFlow navTitle="My Zone of Flow" /> */}
        {/* <MyTherapyJourney navTitle="My Therapy Journey" /> */}
        {/* <MyLearnedOptimism navTitle="My Learned Optimism" /> */}
      </div>
    </>
  );
}

export default App;
