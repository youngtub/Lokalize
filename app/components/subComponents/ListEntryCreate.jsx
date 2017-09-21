import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> formdata
import $ from 'jquery';
//list

const ListEntryCreate = (props) => { 

  const handleSelect = (e) => {
    var venue = $(e.target).attr('id');
    var address = $(e.target).attr('class');
    console.log('HOST SELECTED', venue + ' ' + address)
    $(e.target).css('background-color', 'grey' );
    props.selectCallback(venue, address);
  }

  return (
    <div id='options'>
      {props.entries.map( (entry, ind) => (
        <div style={itemStyle} onClick={handleSelect} key={ind} id={entry.restaurant.name} className={entry.restaurant.location.address} >
<<<<<<< HEAD
=======
=======
import $ from 'jquery';
>>>>>>> merge conflicts fixed
//list

const ListEntryCreate = (props) => {

  const handleSelect = (e) => {
    var venue = $(e.target).attr('id');
    var address = $(e.target).attr('class');
    console.log('HOST SELECTED', venue + ' ' + address)
    $(e.target).css('background-color', 'grey' );
    props.selectCallback(venue, address);
  }

  return (
<<<<<<< HEAD
    <div>
      {props.entries.map( (entry) => (
        <span>
>>>>>>> working on selecting venue
=======
    <div id='options'>
      {props.entries.map( (entry, ind) => (
        <div style={itemStyle} onClick={handleSelect} key={ind} id={entry.restaurant.name} className={entry.restaurant.location.address} >
>>>>>>> merge conflicts fixed
=======
>>>>>>> formdata
            Name: {entry.restaurant.name}<br></br>
            Cuisine: {entry.restaurant.cuisines}<br></br>
            Locality: {entry.restaurant.location.locality}<br></br>
            Rating: {entry.restaurant.user_rating.aggregate_rating}<br></br>
            <img src={entry.restaurant.thumb} width={100} height={100}></img><br></br>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      </div>
        ))}
  </div> )
}

const itemStyle = {
  border: 'solid black',
  borderWidth: '1px',
  borderRadius: '70px',
  padding: '10px',
  textAlign: 'center'
}

=======
            <hr></hr>
      </span>
        ))}
  </div> )
};
>>>>>>> working on selecting venue
=======
=======
>>>>>>> formdata
      </div>
        ))}
  </div> )
}

const itemStyle = {
  border: 'solid black',
  borderWidth: '1px',
  borderRadius: '70px',
  padding: '10px',
  textAlign: 'center'
}

<<<<<<< HEAD
>>>>>>> merge conflicts fixed
=======
>>>>>>> formdata

export default ListEntryCreate;
