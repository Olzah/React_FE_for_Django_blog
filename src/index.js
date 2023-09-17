import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login  from "./components/login";
import Home from "./components/home";
import Navigation from "./components/navigation";
import Logout from './components/logout';


export default function Auth() {
  return (
      <Router>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/logout" component={Logout}/>
        </Routes>
      </Router>

  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth/>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
