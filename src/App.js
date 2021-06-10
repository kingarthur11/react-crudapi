import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AddAuthor from './author/addautho'
import GetAllAuthor from './author/listauthor'
import EditAuthor from './author/author'

function App() {
  return (
    <div>
      <Router>
          <Switch>
              <Route exact path="/addauthor"> <AddAuthor /></Route>
              <Route exact path="/getallauthor"> <GetAllAuthor /></Route>
              <Route exact path="/editauthor"><EditAuthor /></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
