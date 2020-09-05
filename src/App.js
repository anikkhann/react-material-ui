import React from 'react';
import './App.css';
import PostData from './Components/PostData/PostData';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostDetail from './Components/PostDetail/PostDetail';
import NoMatch from './Components/NoMatch/NoMatch';
import '../src/App.css';


function App() {
  //parent component here and main route path and designation components bellow
  return (
    <div className="main-class">
      <Router>
      <Switch>
        
          <Route path="/post">
            <PostData></PostData>
          </Route>

          <Route exact path="/">
            <PostData></PostData>
          </Route>

          <Route path="/information/:exactInformation">
            <PostDetail></PostDetail>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        
      </Switch>
     </Router>
    </div>
  );
}

export default App;
