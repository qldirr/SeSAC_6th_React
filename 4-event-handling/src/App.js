import './App.css';
import Counter from './Counter';
// import ClassBind from './ClassBind';
import SyntheticEvent from './SyntheticEvent';

function App() {
  return (
    <div className="App">
      <SyntheticEvent/>
      <br />
      {/* <ClassBind/> */}
      <br />
      <Counter/>
    </div>
  );
}

export default App;
