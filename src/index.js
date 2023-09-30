import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloWord from './HelloWord/HelloWord';
import TextField from './Forms/TextField';
import Fruit from './Fruit/Fruit';
//https://www.youtube.com/watch?v=6VgAqd4Mttw&list=PLm_sigBWSRY3FPx6aEMVzyx0d9y-IDWvF&index=6
const root = ReactDOM.createRoot(document.getElementById('root'));
const fruitsArray =[
  'lemon',
  'delah',
  'b3ouid',
  'apple',
  'hello'
]
root.render(
  <React.StrictMode>
   <Fruit fruits={fruitsArray}/>
  </React.StrictMode>
);
/*
  <HelloWord lastname="elmehdi" />
    
    <TextField inputname='lastname' inputlabel="your name is :">
      saisir votre last name
    </TextField>
    <TextField inputname='firstname' inputlabel="your firstname is :">
      hello you need to entre your name
    </TextField>
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
