import React from 'react';
//list
const ListEntryCreate = (props) => {

handleSelect

  return (
    <div>
      {props.entries.map( (entry) => (
        <span>
            Name: {entry.restaurant.name}<br></br>
            Cuisine: {entry.restaurant.cuisines}<br></br>
            Locality: {entry.restaurant.location.locality}<br></br>
            Rating: {entry.restaurant.user_rating.aggregate_rating}<br></br>
            <img src={entry.restaurant.thumb} width={100} height={100}></img><br></br>
            <hr></hr>
      </span>
        ))}
  </div> )
};

export default ListEntryCreate;
