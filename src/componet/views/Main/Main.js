import React from "react";
import Grid from "@material-ui/core/Grid";
import MediaCard from "../../Cards/Cards"
import { makeStyles } from '@material-ui/core/styles';

import { BrowserRouter as Router, Switch, Route, Link,useParams } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding:"2rem",
      maxWidth:"80vw",
      alignContent:"center",
      margin:"0 auto"
    },
  
  }));
  
 

function Main({auth,voteCantidate, state}) {
    const classes = useStyles();
  return (
    <div className={classes.root}>
      
      <Grid container spacing={3}>
          {
              state.map(data =>(
                
                <Grid item lg={3} xl={3} md={4} xs={12} key={data.id}>
                    
                <MediaCard voteCantidate={voteCantidate} auth={auth} data = {data}/>
               
               </Grid>
              
            ))
          }
       
      </Grid>
    
    </div>
  );
}

export default Main;
//votes auth={auth} id ={data.id} name ={`${data.first_name} ${data.last_name}`} title ={data.title} desc ={data.desc} img ={data.img}