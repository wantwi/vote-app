import MenuAppBar from "./componet/AppBar";
import MediaCard from "./componet/Cards/Cards";
import Main from "./componet/views/Main/Main";
import Detail from "./componet/views/Main/Detail";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from 'react';

function App() {
  const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAnchorEl(null);
    setAuth(!auth);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAuth(!auth);
  };


  return (
    <div className="App">
    <MenuAppBar handleClose={handleClose} handleChange={handleChange} handleMenu={handleMenu} auth={auth} anchorEl={anchorEl} open={open}/>
    <Router>
      <Switch>
        <Route exact path="/">
          <Main auth={auth}/>
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
      </Switch>
    </Router>
  </div>
  )
}

export default App

