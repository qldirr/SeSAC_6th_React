import CssModuleComponents from './CssModuleComponents';
import SassComponents from './SassComponents';
import StyledComponent from './StyledComponent';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>React Styling</h1>
      <hr />
      <CssModuleComponents/>
      <hr />
      <SassComponents/>
      <hr />
      <StyledComponent/>
    </div>
  );
}

export default App;
