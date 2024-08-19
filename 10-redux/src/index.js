import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App2 from './App2';
import App3 from './App3';
import rootReducer from './store';
import App4 from './App4';

const root = ReactDOM.createRoot(document.getElementById('root'));

// 6. Store 생성
// (전통 Redux 방식) - 'createStore'를 사용해 Redux 스토어 생성
const store = createStore(
  rootReducer,
  // Redux DevTools Extension 사용하는 경우
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


root.render(
  <React.StrictMode>
    {/* React 와 Redux 연결 */}
    {/* 애플리케이션의 모든 컴포넌트가 Redux 스토어에 접근 가능하게됨 */}
    <Provider store={store}>   {/* Redux Provider로 스토어를 앱에 주입 */}
      <App />
      <hr />
      <App2 />
      <hr />
      <App3/>
      <hr />
      <App4/>
    </Provider>
  </React.StrictMode>
);

