import './App.css';
import BestSeller from './BestSeller';
import Food from './Food';
import TextProps from './TextProps';

function App() {
  return (
    <div className="App">
      <Food food='멜론'></Food>
      <hr />
      <BestSeller title='나의 하루는 4시 40분에 시작된다' price='13,500' author='김유진' type='자기계발서'/>
      <hr />
      <TextProps text='기본 text 아님' valid='콘솔 띄우기 성공!'/>
    </div>
  );
}

export default App;
