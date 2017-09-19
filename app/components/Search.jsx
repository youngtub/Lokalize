import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      date: '',
      type: ''
    }
  }

  handleSubmit(event) {
    console.log(this.state)
    event.preventDefault()
  }

  handleChange(event){
    let property = event.target.className;
    let state = {};
    state[property] = event.target.value;
    this.setState(state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
      Enter Address: <input type = "text" className='address' onChange={this.handleChange.bind(this)}/><br/>
      Select Dinner Type: <input list="food" className='type' onChange={this.handleChange.bind(this)}/>
      <datalist id="food">
        <option value="Seafood"/>
        <option value="Steak"/>
        <option value="Chicken"/>
        <option value="Vegetarian"/>
        <option value="No Preference"/>
      </datalist><br/>
      Select Date: <input type = "date" className='date' onChange={this.handleChange.bind(this)}/><br/>
      <input type="submit"/>
      </form>
    )
  }
};

export default Search;
