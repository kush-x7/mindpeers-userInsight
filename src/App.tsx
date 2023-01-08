import "./App.css";
import MindBodyConnect from "./pages/MInd-Body-Connect/MIndBodyConnect";
import MyZoneOfFlow from "./pages/MyZoneOfFlow/MyZoneOfFlow";

function App() {
  return (
    <>
      <div className="app-container">
        {/* <MindBodyConnect navTitle="Mind-Body Connect" /> */}
        <MyZoneOfFlow navTitle="My Zone of Flow" />
      </div>
    </>
  );
}

export default App;
