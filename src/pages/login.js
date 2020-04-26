import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Button as bstrButton, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

// MUI stuff
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = {
  form: {
    textAlign: 'center'
  }
}

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  handleEmailChange = event => {
    this.setState({email: event.target.value});
  } 

  handlePasswordChange = event => {
    this.setState({password: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.form}>
        <Grid item sm />
        <Grid item sm >
          <div className="container">
            <Typography variant="h2" className={classes.pageTitle}>
              Login
            </Typography>
            <form>
              <TextField id="email" name="email" type="email" label="Email" className={classes.textField}
                value={this.state.email} onChange={this.handleEmailChange} fullWidth/>
              <TextField id="password" name="password" type="password" label="Password" className={classes.textField}
                value={this.state.password} onChange={this.handlePasswordChange} fullWidth/>
            </form>
            <Button color="inherit" component={Link} to="/home">
              Log In
            </Button>
            <Button color="inherit" component={Link} to="/signup">
              Sign Up
            </Button>

          </div>
        </Grid>

        <Grid item sm />

      </Grid>
    );
  }
}

login.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(login);
