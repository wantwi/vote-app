import AppBar from "./componet/AppBar";
import MediaCard from "./componet/Cards/Cards";
import Main from "./componet/views/Main/Main";
import Detail from "./componet/views/Main/Details/Detail";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FakeData from "./FakeData/DFakeBD.json";
import Localbase from "localbase";
import CustomizedDialogs from "./componet/modals/CustomModal";
import React, { useState, useEffect, createContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { bool } from "yup";

let db = new Localbase("db");

const intit = [];
const initialState = {};
const initUser = { id: 0, username: "", password: "" };

toast.configure();

const notify_success = (message) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

const notify_error = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

function App() {
  const [auth, setAuth] = useState(false);
  const [user, setuser] = useState(initUser);
  const [anchorEl, setAnchorEl] = useState(null);
  const [state, setState] = useState(intit);

  const storeContext = createContext(initialState);

  console.log({ storeContext });

  const [openModal, setopenModal] = useState(false);
  const [userLogin, setuserLogin] = useState({ username: "", password: "" });

  const toggleModalHandler = () => {
    setopenModal(!openModal);
  };

  const hasVote = () => {
   let res;
    db.collection("voters")
      .get()
      .then((users) => {
         let isfound = users.filter((x) => x.username === user.username);
        
         res = isfound.length > 0 ? true : false
      });

      console.log({res});
     
  };

  const saveVote =()=>{
    db.collection('voters').add(user)
  }

  const voteCantidate = (id) => {
  
    db.collection("voters")
      .get()
      .then((users) => {
         let isfound = users.find((x) => x.username === user.username);
         
        let found = isfound ? true : false

        !found
      ? db
          .collection("canidates")
          .doc({ id: id })
          .get()
          .then((document) => {
            db.collection("canidates")
              .doc({ id: id })
              .update({
                votes: document.votes + 1,
              })
              .then((res) => {
                saveVote();
                getCanditade();
              });
          })
      : notify_error("Sorry!! You have voted already");
       
        
      });


   
  };


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
    setuser({});
    console.log(user);
  };

  
  const getCanditade = () => {
    db.collection("canidates")
      .get()
      .then((canidates) => {
        setState(canidates);
      });
  };

  useEffect(() => {
    getCanditade();

   
  }, []);

  return (
    <div className="App">
      <storeContext.Provider value={user}>
        <AppBar
          user={user}
          handleClose={handleClose}
          handleChange={handleChange}
          toggleModalHandler={toggleModalHandler}
          handleMenu={handleMenu}
          auth={auth}
          anchorEl={anchorEl}
          open={open}
        />
        <CustomizedDialogs
          setuser={setuser}
          setopenModal={setopenModal}
          setAuth={setAuth}
          openModal={openModal}
          toggleModalHandler={toggleModalHandler}
          loginData={userLogin}
        />
        <Router>
          <Switch>
            <Route exact path="/home">
              <Main state={state} voteCantidate={voteCantidate} auth={auth} />
            </Route>
            <Route exact path="/">
              <Main
                state={state}
                setuser={setuser}
                voteCantidate={voteCantidate}
                auth={auth}
              />
            </Route>
            <Route path="/detail/:id">
              <Detail />
            </Route>
          </Switch>
        </Router>
      </storeContext.Provider>
    </div>
  );
}

export default App;
