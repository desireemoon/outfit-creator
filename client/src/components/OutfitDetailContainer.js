import React, { useState } from 'react';
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

function OutfitDetailContainer(props) {
  const [flipped, setFlipped] = useState(false)
  const [name, setName] = useState(props.outfit.name)
  const [creator, setCreator] = useState(props.outfits.creator)

  const changeName = (e) => {
    setName(e.target.value)
  }
  const changeCreator = (e) => {
    setCreator(e.target.value)

  const onClick = (e) => {
    e.preventDefault()
    axios.put(`/api/outfits/${props.outfit.id}`, { name, creator, type, color, fabric, brand, url, imgUrl })
      .then(response => {
        console.log("response from put:\n", response);
      }).catch(err => console.log("Error while putting!", err))
    setFlipped(f => !f)
  }

  async function handleDelete() {
    let deleted = await axios.delete(`/api/outfits/${props.outfit.id}`)
    console.log(deleted)
    // return <Redirect to={`/outfits`} />
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
            <h1><a href={url}>{name}</a></h1>
            <img src={imgUrl} alt={name} />
            <img src={imgUrl} alt={name} />
            <p>Created by: {creator}</p>
            <p>Article Type: {type}</p>
            <p>Brand: {brand}</p>
            <p>Color: {color}</p>
            <p>Fabric: {fabric}</p>
          </div>
        </>
      );
    }
  }
  return (
    <div>
      {showCard()}
      <button ><Link className="back" to="/clothing">Back</Link></button>
      <button onClick={() => setFlipped(f => !f)}>
        Toggle Edit Article
      </button>
      <button onClick={handleDelete}><Link className="delete" to="/clothing">Delete</Link></button>
    </div>
  );
}

export default OutfitDetailContainer;