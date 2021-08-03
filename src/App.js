import React from 'react';
import Chat from "./components/Chat/Chat";
import RegisteredTeachers from "./components/Teachers/Teachers";

import {BrowserRouter as Router , Route} from "react-router-dom";

function App() {
  return(
    <Router>
      <Route exact path="/" component ={RegisteredTeachers} />
      <Route path="/chat/:id" component ={Chat} />
    </Router>
  )
}

export default App;
