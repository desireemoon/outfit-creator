import React from 'react';
import axios from "axios";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import ItemList from './ItemDetails';
import {Link} from 'react-router-dom';



function ItemDetails(props) {
  async function handleDelete(){
    // update route for axios call 
    // axios for be something like "this.props.params"
    let deleted = await axios.delete(`/api/articles/${props.article.id}`)
    console.log(deleted)
    // return <Redirect to={`/clothing`} />
    

  }

// flip feature in this component.  change to class component. 

  return (
    <div>
      <h1><a href={props.article.url}>{props.article.name}</a></h1>
      <img src={props.article.imgUrl} alt={props.article.name} />
      <p>Creted by: {props.article.creator}</p>
      <p>Article Type: {props.article.type}</p>
      <p>Brand: {props.article.brand}</p>
      <p>Color: {props.article.color}</p>
      <p>Fabric: {props.article.fabric}</p>
      <button onClick = {props.onClickEdit}><Link className="nav-link" to="/clothing">Edit</Link></button>
      <button onClick ={handleDelete}><Link className="nav-link" to="/clothing">Delete</Link></button>
     
    </div>
  );
}

export default ItemDetails;
