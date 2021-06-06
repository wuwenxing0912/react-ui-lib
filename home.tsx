import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Icon from './lib/icon/icon.home';
import Button from './lib/button.home';

ReactDOM.render(
  <Router>
    <div>
      <header>React UI</header>
    </div>
    <div>
      <aside>
        <h2>组件</h2>
        <ul>
          <li>
            <Link to='/icon'>Icon</Link>
          </li>
          <li>
            <Link to='/button'>Button</Link>
          </li>
        </ul>
      </aside>
      <main>
        <Route path='/icon' component={Icon}></Route>
        <Route path='/button' component={Button}></Route>
      </main>
    </div>
  </Router>,
  document.querySelector('#root')
);