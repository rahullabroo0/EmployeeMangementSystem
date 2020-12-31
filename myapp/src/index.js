import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './style.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import Home from './components/home'; 
import About from './components/about';
import Employee from './components/employee';
import ViewDetail from './components/viewdetail.';




class MyForm extends React.Component { 
  render() {
    return (

        <Router> 
           <div> 
            {/* <ul > 
              <li> 
                <Link to="/">Home</Link> 
              </li> 
              <li> 
                <Link to="/about">About Us</Link> 
              </li> 
              <li> 
                <Link to="/employee">employee</Link> 
              </li>
            </ul>  */}
            <Switch> 
              <Route exact path='/' component={Home}></Route> 
              <Route exact path='/about' component={About}></Route> 
              <Route exact path='/employee' component={Employee}></Route>
              <Route exact path='/viewdetail' component={ViewDetail}></Route> 
            </Switch> 
          </div> 
        </Router> 

    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));