import React from 'react';
import axios from "axios";

function ItemDetails(props) {
  async function handleDelete(){
    // update route for axios call 
    // axios for be something like "this.props.params"
    let deleted = await axios.delete(`/${props.item.id}`)
    console.log(deleted)
  }

// flip feature in this component.  change to class component. 

  return (
    <div>
      <h1>{props.article.id}</h1>
      <img src={props.article.imgUrl} alt={props.article.name} />
      <p>{props.article.creator}</p>
      <p>{props.article.type}</p>
      <p>{props.article.brand}</p>
      <p>{props.article.color}</p>
      <p>{props.article.color}</p>
      <button onClick = {props.onClickEdit}>Edit</button>
      <button onClick = {handleDelete}>Delete</button>
     
    </div>
  );
}

export default ItemDetails;
