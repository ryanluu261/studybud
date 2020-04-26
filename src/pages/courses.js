import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';

const styles = {
    color: 'white',
    backgroundColor: 'blue',
    padding: '70px',
    fontFamily:'Arial',
    borderWidth: '3px',
    borderColor: 'white',
}

const buttonStyles = {
    color: 'white',
}


export class courses extends Component {
    constructor() {
        super();
        this.state = {
          noOfCourese: 3,
          courses: [
            {id: 1, name: "Course A"},
            {id: 2, name: "Course B"},
            {id: 3, name: "Course C"}
          ]
        }
      }
    
      render() {
        return (
          <div className="container">
              {this.state.courses.map( course => 
              <div style={styles}>
                  <br></br>
                  <Button style={buttonStyles} color = 'blue'> {course.name}</Button>
              </div>
              )}
          </div>
        );
      }
    }

export default courses;
