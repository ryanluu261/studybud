import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
// import SplitPane from 'react-split-pane';

import classroom from "./classroom"
import Navbar from "../components/Navbar";

//styles
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';


const styles = {
  root: {
    width: '100%',
    maxWidth: 360,

  },
  form: {
    textAlign: 'center'
  },

  grid: {
    margin: '300px 0 auto 300px'
  },

  grid1: {
    margin: 'auto 0 auto 300px',
    backgroundColor: 'blue'
  }
}

class home extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     activeFriends: [],
  //   }
  // }

  // displayActiveFriens = () => {
  //   return (
  //     <div></div>
  //   )
  // }
  
  render () {
    const { classes } = this.props;

    return(
      <div>
        <Navbar />

        <Grid container className={classes.form}>

          <Grid className={classes.grid1} item sm />

          <Grid item sm >
            <div className="container">
              <Typography variant="h2" className={classes.pageTitle}>
                Home page
              </Typography>
          
          
              <Button color="inherit" component={Link} to="/classroom">
                Create new classroom
              </Button>
            </div>
          </Grid>

          <Grid className={classes.grid} item sm>
            <h3>Friends studying: </h3>
            <List dense className={classes.root}>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((value) => {
                const labelId = `checkbox-list-secondary-label-${value}`;
                return (
                  <ListItem key={value} button>
                    <ListItemText id={labelId} primary={`Friend ${value + 1}`} />
                  </ListItem>
                );
              })}
            </List>
          </Grid>
          
        </Grid>  

      </div>    
    
    )
  }
  
}

export default withStyles(styles)(home);
