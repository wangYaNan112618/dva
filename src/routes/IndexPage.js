import React from 'react';
import { connect } from 'dva';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home'
import About from './About'
import Topics from './Topics'
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
