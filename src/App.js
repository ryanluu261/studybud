import React, { Component } from "react";
import "./App.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// Components
import Navbar from "./components/Navbar";


// Pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";
import classroom from "./pages/classroom";
import profile from "./pages/profile";
import courses from "./pages/courses";
import statistic from "./pages/statistic";



class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Router>
          
          <div classname="container">
            <Switch>
              
            <Route exact path="/" component={login} />
              <Route exact path="/home" component={home} />
              <Route exact path="/signup" component={signup} />
              
            </Switch>

            <Switch>
              <Route exact path="/courses" component={courses}/>
              <Route exact path="/profile" component={profile}/>
              <Route exact path="/classroom" component={classroom}/>
              <Route exact path="/statistic" component={statistic}/>
              {/* <Route path="/classroom" component={classroom}/> */}
            </Switch>
            
        
          </div>
        </Router>

      </div>
    );
  }
}

export default App;





