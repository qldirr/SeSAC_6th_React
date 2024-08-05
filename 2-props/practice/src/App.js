import './App.css';

function App() {
  const name = '하니'
  const animal = '강아지'
  const a = 5
  const b = 3
  const title = 'Hello World'
  return (
    <div className="App">
      <h2>제 반려 동물의 이름은
        <span style={{textDecoration:'underline'}}>{name}</span>
         입니다</h2><br/>
      <h2>
      <span style={{textDecoration:'underline'}}>{name}</span>
        는 
        <span style={{textDecoration:'underline'}}>{animal}</span>
        입니다</h2>
      
      <div>{3+5 === 8 ? <span>정답입니다</span> : <span>오답입니다</span>}</div>

      <div> {a > b && <p>a가 b보다 큽니다.</p>}</div>

      <h1 className='title'>{title}</h1>
      <div>
        <label>아이디</label>
        <input type='text'/> <br/>
        <label>비밀번호</label>
        <input type='password'/>
      </div>
    </div>
  );
}

export default App;
