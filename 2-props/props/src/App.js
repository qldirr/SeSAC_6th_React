import './App.css';
import Button from './Button';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';

function App() {
  return (
    <div className="App">
      <ClassComponent/>

      {/* props 넘겨줌 */}
      <ClassComponent name="SeSAC 6th"/>   
      <hr/>

      <FunctionComponent />
      {/* <FunctionComponent name={3}/> */}

      {/* props 넘겨줌 */}
      <FunctionComponent name='SeSAC 6th'/>
      <hr/>

      <Button link='https://www.google.com'>Google</Button>
    </div>
  );
}

export default App;
