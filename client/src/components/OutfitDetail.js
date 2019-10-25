import React, { useState } from 'react';
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Switch, Redirect, useHistory } from 'react-router-dom';

function OutfitDetail(props) {
  let history = useHistory()
  const [flipped, setFlipped] = useState(false)
  const [name, setName] = useState(props.outfit.name)
  const [creator, setCreator] = useState(props.outfit.creator)

  const changeName = (e) => {
    setName(e.target.value)
  }
  const changeCreator = (e) => {
    setCreator(e.target.value)
  }
  const onClick = (e) => {
    e.preventDefault()
    axios.put(`/api/outfits/${props.outfit.id}`, { name, creator })
      .then(response => {
        console.log("response from put:\n", response);
      }).catch(err => console.log("Error while putting!", err))
    setFlipped(f => !f)
  }

  async function handleDelete() {
    let deleted = await axios.delete(`/api/outfits/${props.outfit.id}`)
    console.log(deleted)
    // return <Redirect to={`/outfits`} />
    history.push("/outfits");
  }
  const showCard = () => {
    if (flipped) {
      return (<div>This will be the same code for CreateOutfit but w/ props to fill forms</div>)
    } else {
      return (
        <>
          <h1>{name}</h1>
          <p>Created by: {creator}</p>
          <div className="outfit-details-article-container">
            {props.outfit.Articles.map(article => {
                return(
                <div className="article-container"> 
                    <h1><a href={article.url}>{article.name}</a></h1>
                    <img src={article.imgUrl} alt={article.name} />
                    <p>Created by: {article.creator}</p>
                    <p>Article Type: {article.type}</p>
                    <p>Brand: {article.brand}</p>
                    <p>Color: {article.color}</p>
                    <p>Fabric: {article.fabric}</p>
                </div>
            )})}
          </div>
        </>
      );
    }
  }
  return (
    <div>
      {showCard()}
      <button ><Link className="back" to="/outfits">Back</Link></button>
      <button onClick={() => setFlipped(f => !f)}>Edit Outfit</button>
      <button onClick={handleDelete}><Link className="delete" to="/clothing">Delete Outfit</Link></button>
    </div>
  );
}

export default OutfitDetail;