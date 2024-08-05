import './App.css';
import BestSeller from './BestSeller';
import Food from './Food';

function App() {
  return (
    <div className="App">
      <Food food='멜론'></Food>

      <BestSeller title='나의 하루는 4시 40분에 시작된다' price='13,500' author='김유진' type='자기계발서'/>
    </div>
  );
}

export default App;
