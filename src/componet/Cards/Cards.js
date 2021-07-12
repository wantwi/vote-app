import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function MediaCard({data,auth,voteCantidate,setuser}) {
   
  let {first_name,last_name,img, title,desc,id,votes} = data
  const classes = useStyles();

  return (
    <Card>
          <Link to={`/detail/${id}`} key={id} style={{textDecoration:"none"}} >
      <CardActionArea style={{ background: "#fff" }}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent style={{ margin: "0", padding: "0", background: "#fff" }}>
          <Grid container spacing={2} style={{ background: "#ba1c24",color:"#ffffff", padding:"0 5px"}}>
            <Grid item xs={8}>
              <Typography
              
                gutterBottom
                variant="h6"
                component="h6"
              >
                {`${first_name} ${last_name}`}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
           
                gutterBottom
                variant="h6"
                component="h6"
              >
                Votes: {votes}
              </Typography>
            </Grid>
          </Grid>
          <Typography
            variant="h6"
            color="textSecondary"
            style={{ background: "#fff",padding:"0 5px",textTransform:"uppercase",fontSize:16,opacity:"1"}}
            component="p"
          >
           { title}
          </Typography>
          

          <Typography
            variant="body2"
            color="textSecondary"
            style={{ background: "#fff",padding:"0 5px" }}
            component="p"
          >
           {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
      <CardActions style={{ margin: "0",  background: "#fff" }}>
     
       {auth? <Button onClick={()=>{voteCantidate(id)}} style={{ background: "#ba1c24"}} disableElevation fullWidth size="small" variant="contained" color="secondary">
          Vote
        </Button>:null}
      </CardActions>
    </Card>
  );
}
