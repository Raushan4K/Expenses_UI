import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NetflixRegisterComponent } from './components/NetflixRegisterComponent';
import reportWebVitals from './reportWebVitals';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

//import { NetflixRegisterComponent } from './components/NetflixRegisterComponent';
import NetflixIndexComponent from './components/NetflixIndexComponent';
import DataBindingComponent from './components/DataBindingComponent';
import TwoWayBinding from './components/TwoWayBindingComponent';
import FormComponent from './components/FormComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* <DataBindingComponent/>  */}
    {/* <FormComponent/>  */}
     {/* <NetflixIndexComponent/> */}
     {/* <TwoWayBinding/> */}
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
