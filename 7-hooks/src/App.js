import './App.css';
// import UseCallBackEx from './components/UseCallBackEx';
// import UseCallBackEx2 from './components/UseCallBackEx2';
import UseReducerEx from './components/UseReducerEx';
import useTitle from './hooks/useTitle';
// import UseMemoEx from './components/UseMemoEx';

function App() {
  useTitle('React Hooks 학습중')   // useTitle 컴포넌트의 custom 변수에 문자열 대입
  return (
    <div className="App">
      {/* <UseMemoEx/> */}
      {/* <hr />
      <UseCallBackEx/>
      <hr />
      <UseCallBackEx2 postId = {7}/>
      <hr /> */}
      <UseReducerEx/>
      <hr />
    </div>
  );
}

export default App;
