import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import FakeData from "../../../../FakeData/DFakeBD.json";
import "./Detail.css";

const useStyles = makeStyles((theme) => ({
  container: {
    boxShadow: "0 0 0 1px rgb(67 41 163 / 8%), 0 1px 5px 0 rgb(67 41 163 / 8%)",
    marginBottom: "30px",
    borderRadius: "4px",
    transition: "0.3s",
  },
  wrapper: {
    width: "90%",
    margin: "3rem auto",
  },
  text_j: {
    textAlign: "Justify",
  },
  news_wrapper: {
    boxShadow: "0 0 0 1px rgb(67 41 163 / 8%), 0 1px 5px 0 rgb(67 41 163 / 8%)",
    marginBottom: "30px",
    borderRadius: "4px",
    transition: "0.3s",
    padding: "0",
  },
  cards: {
    width: "98%",
    boxShadow: "0 0 0 1px rgb(67 41 163 / 8%), 0 1px 5px 0 rgb(67 41 163 / 8%)",
    height: "180px",
    marginBottom: "20px",
    padding: "1rem 0.3rem",
    overflow: "hidden",
  },
}));

function Detail() {
  const classes = useStyles();
    let { id } = useParams();

  let de =  FakeData.find(x => x.id === +id)

  const {first_name,last_name,title, desc, img,votes} = de

  console.log({de})

  return (
    <div className="wrapper">
      <div className="left-side">
        <div className="img-view">
          <img  src={img} />
          <Typography variant="h4" component="h1">
          Vison Statement
        </Typography>
        <Typography variant="body1" component="p" className={classes.text_j}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Quis ipsum suspendisse.
        </Typography>
        <Typography
          variant="h4"
          component="h1"
         
        >
          Community Project
        </Typography>
        <Typography variant="body1" component="p" className={classes.text_j}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Quis ipsum suspendisse.
        </Typography>
        </div>
        <div className="text-content">
          <Typography variant="h4" component="h1">
          {`${first_name} ${last_name}`}
          </Typography>
          <Typography variant="h6" component="h6">
            From:
          </Typography>
          <Typography variant="body1" component="p">
            Tema New Town
          </Typography>
          <Typography variant="h6" component="h6">
            About:
          </Typography>
          <Typography variant="body1" component="p" className={classes.text_j}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Quis ipsum suspendisse.
          </Typography>
        </div>
      </div>
      <div className="right-side"> </div>
      <div className="more-text">
        
      </div>
      <div className="more-text">
        
      </div>
    </div>
  );
}

export default Detail;
