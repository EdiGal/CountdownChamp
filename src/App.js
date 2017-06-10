import React, { Component } from 'react';
import Clock from'./Clock.js'
import {Form, FormControl, Button} from 'react-bootstrap'
// let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let d = new Date();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      deadline: 'November 11, 2017',//`${monthNames[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`,
      newDeadline: ''
    }
  }

  ChangeDeadline(){
    console.log('App: ChangeDeadline')
    this.setState({
      deadline: this.state.newDeadline
    })
  }

  render() {
    console.log('App: render App')
    return (
      <div>
        <h1>Countdown to {this.state.deadline}</h1>
        <Clock
          deadline={this.state.deadline}
        />
        <Form inline>
          <FormControl
            className="deadline-input"
            placeholder="new date"
            onChange={event=>this.setState({newDeadline: event.target.value})}
          >
          </FormControl>
          <Button onClick={()=>this.ChangeDeadline()}>
            change deadline
          </Button>
        </Form>
      </div>
    );
  }
}

export default App;
