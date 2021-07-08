import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link,useParams } from "react-router-dom";
import FakeData from "../../../FakeData/DFakeBD.json"

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

const {first_name,last_name,title, desc, img} = de

console.log({de})

  return (
    <div>
      <Grid container className={`${classes.wrapper} `} spacing={3}>
        <Grid item lg={8} xl={8} md={12} xs={12} className={classes.container}>
          <Grid container spacing={3}>
            <Grid item lg={8} xl={8} md={12} xs={12}>
              <img
                style={{ overflow: "hidden", height: "70vh", width: "100%" }}
                src={img}
              />
              
            </Grid>
            <Grid item lg={4} xl={4} md={4} sm={4} xs={12}>
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
              <Typography
                variant="body1"
                component="p"
                className={classes.text_j}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Quis ipsum
                suspendisse.
              </Typography>
            </Grid>
            <Grid container style={{ padding: "0 1rem" }}>
              <Typography variant="h4" component="h1">
                Vison Statement
              </Typography>
              <Typography
                variant="body1"
                component="p"
                className={classes.text_j}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Quis ipsum
                suspendisse.
              </Typography>
            </Grid>
            <Grid style={{ padding: "0 1rem" }}>
              <Typography
                variant="h4"
                component="h1"
                style={{ margin: "1.5rem 0rem 0.5rem 0" }}
              >
                Community Project
              </Typography>
              <Typography
                variant="body1"
                component="p"
                className={classes.text_j}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Quis ipsum
                suspendisse.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          lg={3}
          xl={3}
          md={12}
          xs={12}
          className={classes.container}
          style={{ marginLeft: "20px" }}
        >
             <Typography variant="h4" component="h1">
            Peoples Story
            </Typography>
          <Card className={classes.cards}>
           
            <Grid container>
              <Grid item xl={5} lg={5} sm={12} xs={12}>
                <img
                  style={{
                    overflow: "hidden",
                    height: "18vh",
                    width: "98%",
                    borderRadius: "0.5rem",
                    marginRight:"5px"
                  }}
                  src="http://metropolitanhost.com/themes/themeforest/html/vitto/assets/img/slider.jpg"
                />
              </Grid>
              <Grid item xl={7} lg={7} sm={12} xs={12}>
                <Typography variant="h6" component="h6">
                  New voter's registration
                </Typography>
              </Grid>
            </Grid>
            
          </Card>
          <Card className={classes.cards}>
           
            <Grid container>
              <Grid item xl={5} lg={5} sm={12} xs={12}>
                <img
                  style={{
                    overflow: "hidden",
                    height: "18vh",
                    width: "98%",
                    borderRadius: "0.5rem",
                    marginRight:"5px"
                  }}
                  src="http://metropolitanhost.com/themes/themeforest/html/vitto/assets/img/slider.jpg"
                />
              </Grid>
              <Grid item xl={7} lg={7} sm={12} xs={12}>
                <Typography variant="h6" component="h6">
                  New voter's registration
                </Typography>
              </Grid>
            </Grid>
            
          </Card>
          <Card className={classes.cards}>
           
            <Grid container>
              <Grid item xl={5} lg={5} sm={12} xs={12}>
                <img
                  style={{
                    overflow: "hidden",
                    height: "18vh",
                    width: "98%",
                    borderRadius: "0.5rem",
                    marginRight:"5px"
                  }}
                  src="http://metropolitanhost.com/themes/themeforest/html/vitto/assets/img/slider.jpg"
                />
              </Grid>
              <Grid item xl={7} lg={7} sm={12} xs={12}>
                <Typography variant="h6" component="h6">
                  New voter's registration
                </Typography>
              </Grid>
            </Grid>
            
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Detail;
