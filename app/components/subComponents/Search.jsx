import React from 'react';
import axios from 'axios';
import { Button, ButtonGroup, DropdownButton, MenuItem, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      date: '',
      dinnerType: 'Dinner Type'
    }
    this.dinnerTypeChange = this.dinnerTypeChange.bind(this)
    this.dateChange = this.dateChange.bind(this)
    this.addressChange = this.addressChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('/api/search', {
      address: this.state.address,
      date: this.state.date,
      dinnerType: this.state.dinnerType
    })
    .then(data => console.log(data))//TODO add logic to handle the returned post request data
  }

  // handleChange(event){
  //   let property = event.target.value;
  //   let state = {};
  //   state[property] = event.target.value;
  //   this.setState(state)
  // }

  dinnerTypeChange(eventKey, e) {
    this.setState({ dinnerType: eventKey });
  };

  dateChange(e) {
    this.setState({ date: e.target.value });
  };

  addressChange(e) {
    this.setState({ address: e.target.value });
  };

  // onSubmit={this.handleSubmit.bind(this)}
  render() {
    return (
      <Form inline>
        <FormGroup controlId="formDate">
          <ControlLabel>Date</ControlLabel><br />
          <FormControl 
            type="date" 
            value={this.state.date} 
            onChange={this.dateChange}
            placeholder="What date are you available?" />
        </FormGroup>
        <FormGroup controlId="formAddress">
          <ControlLabel>Address</ControlLabel><br />
          <FormControl 
            type="text" 
            value={this.state.address} 
            onChange={this.addressChange}
            placeholder="Where will you be?" />
        </FormGroup>
      {/* Enter Address: <input type = "text" className='address' onChange={this.handleChange}/><br/> */}
      {/* Select Dinner Type: <input list="food" className='dinnerType' onChange={this.handleChange}/> */}
      <ButtonGroup>
        <DropdownButton 
          title={this.state.dinnerType}
          id="bg-nested-dropdown"
          onSelect={this.dinnerTypeChange}
        >
          <MenuItem eventKey="seafood" >Seafood</MenuItem>
          <MenuItem eventKey="Steak" >Steak</MenuItem>
          <MenuItem eventKey="Chicken" >Chicken</MenuItem>
          <MenuItem eventKey="Vegetarian" >Vegetarian</MenuItem>
          <MenuItem eventKey="" >No Preference</MenuItem>
        </DropdownButton>
      </ButtonGroup><br/><br/>
        <Button type="submit" onClick={this.handleSubmit}>
          Find My Event
        </Button>
      </Form>
    )
  }
};

export default Search;
