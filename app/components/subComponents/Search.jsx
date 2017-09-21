import React from 'react';
import axios from 'axios';
import { Button, ButtonGroup, DropdownButton, MenuItem, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';


const WarningBanner = (props) => {
  if (!props.error) {
    return null;
  }

  return (
    <div className="error">
      Cannot Find an Event with your preferences please try again. Or click "Host Event" above to create your own
    </div>
  );
}


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      date: '',
      emailValid: false,
      passwordValid: false,
      formValid: false,
      dinnerType: 'Dinner Type',
      noEventFound: false
    }
    this.dinnerTypeChange = this.dinnerTypeChange.bind(this)
    this.dateChange = this.dateChange.bind(this)
    this.addressChange = this.addressChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('/api/search', {
      user_id: this.props.user_id,
      address: this.state.address,
      date: this.state.date,
      dinnerType: this.state.dinnerType
    })
    .then(data => {
      if (!data.data) {
        this.setState({noEventFound: true})
      }
    })
  }

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
        <br /><br/>
        <FormGroup controlId="formAddress">
          <ControlLabel>Address</ControlLabel><br />
          <FormControl
            type="text"
            value={this.state.address}
            onChange={this.addressChange}
            placeholder="Where will you be?" />
        </FormGroup>
        <br /><br/>
      <ButtonGroup>
        <DropdownButton
          title={this.state.dinnerType}
          id="bg-nested-dropdown"
          onSelect={this.dinnerTypeChange}
        >
          <MenuItem eventKey="Seafood" >Seafood</MenuItem>
          <MenuItem eventKey="Steak" >Steak</MenuItem>
          <MenuItem eventKey="Chicken" >Chicken</MenuItem>
          <MenuItem eventKey="Vegetarian" >Vegetarian</MenuItem>
          <MenuItem eventKey="" >No Preference</MenuItem>
        </DropdownButton>
      </ButtonGroup><br /><br/>
        <Button type="submit" onClick={this.handleSubmit}>
          Find My Event
        </Button>
        <WarningBanner error={this.state.noEventFound}/>
      </Form>
    )
  }
};



export default Search;
