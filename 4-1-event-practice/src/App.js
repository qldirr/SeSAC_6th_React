import "./App.css";
import ChangeColor from "./components/ex/ChangeColor";
import HandleEx from "./components/ex/HandleEx";
import ToggleText from "./components/ex/ToggleText";

function App() {
  return (
    <div className="App">
      <HandleEx />
      <hr />
      <ChangeColor />
      <hr />
      <ToggleText />
    </div>
  );
}

export default App;
