import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const styles = {
  form: {
    textAlign: 'center'
  },
}

class classroom extends Component {
  render() {
    const { classes } = this.props;
    
    return (
      <div className="container">
        <Typography variant="h2" className={classes.pageTitle, classes.form}>
          Your virtual classroom!
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(classroom);
