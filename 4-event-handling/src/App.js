import "./App.css";
import Counter from "./Counter";
import EventStudy from "./EventStudy";
// import ClassBind from './ClassBind';
import SyntheticEvent from "./SyntheticEvent";

function App() {
  return (
    <div className="App">
      <EventStudy/>
      <br />
      <SyntheticEvent />
      <br />
      {/* <ClassBind/> */}
      <br />
      <Counter />
    </div>
  );
}

export default App;
