import MenuAppBar from "./componet/AppBar";
import MediaCard from "./componet/Cards/Cards";
import Main from "./componet/views/Main/Main";
import Detail from "./componet/views/Main/Details/Detail";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FakeData from "./FakeData/DFakeBD.json"

import CustomizedDialogs from "./componet/modals/CustomModal"
import React, {useState,useRef} from "react"





// const reducer = (state, action) => {
//   switch (action.type) {
   

//     case "Reset":
//       return { ...state, formData: action.payload };

//     default:
//       throw new Error();
//   }
// };
const intit = FakeData


function App() {
  const [auth, setAuth] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
 const [state, setState] = useState(intit)



  const [openModal, setopenModal] = useState(false)
  const [userLogin, setuserLogin] = useState({username:"", password:""})

  const toggleModalHandler = ()=>{
    setopenModal(!openModal)
  }

  const voteCantidate = (id)=>{
    console.log({id});
    let candidate = state.filter(x=>x.id === id)
    let Othercandidates = state.filter(x=>x.id !== id)
    candidate.map(x =>{
      let res = {id:x.id,first_name:x.first_name,last_name:x.last_name, votes:x.votes, title:x.title, desc:x.desc, img:x.img}

      Othercandidates.push(res)
    })
   
    setState(Othercandidates)
   
  }

  
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
    <MenuAppBar handleClose={handleClose} handleChange={handleChange} toggleModalHandler={toggleModalHandler} handleMenu={handleMenu} auth={auth} anchorEl={anchorEl} open={open}/>
    <CustomizedDialogs setopenModal={setopenModal} setAuth={setAuth} openModal={openModal} toggleModalHandler={toggleModalHandler} loginData={userLogin} />
    <Router>
      <Switch>
        <Route exact path="/home">
          <Main state={state}  voteCantidate={voteCantidate} auth={auth}/>
        </Route>
        <Route exact path="/">
          <Main state={state}  voteCantidate={voteCantidate} auth={auth}/>
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

