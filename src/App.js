import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AddAuthor from './author/addautho'
import GetAllAuthor from './author/listauthor'
import EditAuthor from './author/editauthor'
import AddComment from './comment/addcomment'
import GetAllComment from './comment/listcomment'
import EditComment from './comment/editcomment'

function App() {
  return (
    <div>
      <Router>
          <Switch>
              <Route exact path="/addauthor"> <AddAuthor /></Route>
              <Route exact path="/getallauthor"> <GetAllAuthor /></Route>
              <Route exact path="/editauthor/:id" render={(props) => <EditAuthor {...props} match={this.handleMatch}/>}></Route>
              <Route exact path="/addcomment"> <AddComment /></Route>
              <Route exact path="/getallcomment"> <GetAllComment /></Route>
              <Route exact path="/editcomment/:id"><EditComment /></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
