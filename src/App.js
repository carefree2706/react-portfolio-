import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/Nav';
import About from './components/About/index';
import Contact from './components/Contact/index';
import Resume from './components/Resume/index';
import Footer from './components/Footer';
import Cards from './components/Cards/index';



const style = {
  color: 'purple',
  textDecoration: 'none',
 

}

function App() {
  return (
    <Router>
      <div className="page-container">
        <h1><a href='/' style={style}>DW</a></h1>
        <Nav></Nav>
        <Switch>
          <Route exact path='/' component={About}  />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/resume' component={Resume} />
          <Route exact path='/projects' component={Cards} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;