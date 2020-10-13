import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Posts from './Components/Posts/Posts.js';
import PostDetails from './Components/PostDetails/PostDetails';
import NotFound404 from './Components/NotFound404/NotFound404';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Posts />
              </Route>
              <Route exact path="/posts">
                <Posts />
              </Route>
              <Route exact path="/posts/:postId">
                <PostDetails />
                </Route>
                <Route path="*">
                  <NotFound404 />
                </Route>
            </Switch>
      </Router>
    </div>
  );
}

export default App;
