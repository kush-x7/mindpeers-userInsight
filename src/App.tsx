import "./App.css";
import MindBodyConnect from "./pages/MInd-Body-Connect/MIndBodyConnect";
import MyTherapyJourney from "./pages/MyTherapyJourney/MyTherapyJourney";
import MyZoneOfFlow from "./pages/MyZoneOfFlow/MyZoneOfFlow";

function App() {
  return (
    <>
      <div className="app-container">
        {/* <MindBodyConnect navTitle="Mind-Body Connect" /> */}
        <MyZoneOfFlow navTitle="My Zone of Flow" />
        {/* <MyTherapyJourney navTitle="My Therapy Journey" /> */}
      </div>
    </>
  );
}

export default App;
