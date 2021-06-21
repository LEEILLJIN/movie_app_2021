import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//<App/> : react의 component(컴포넌트) not HTML
//component(컴포넌트) : HTML을 반환하는 함수
//jsx : JS를 확장한 문법, JS안의 html, JS의 모든 기능을 포함 react에 특화된 지식
//구 버전에서는 react application이 하나의 component만을 rendering해야 했었다. 하지만 지금은 두개의 컴포넌트도 랜더링이 가능
//(단, <React.StrictMode></React.StrictMode>안에 포함되어있어야함)
//하나의 컴포넌트로만 랜더링하는 경우에 다른 컴포넌트는 랜더링된 컴포넌트 안에서 작성되어야한다.
//
reportWebVitals();
