import React, { useState } from 'react';
import axios from "axios";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import ItemList from './ItemDetails';
import { Link } from 'react-router-dom';

function ItemDetails(props) {
  const [flipped, setFlipped] = useState(false)
  const [name, setName] = useState(props.article.name)
  const [creator, setCreator] = useState(props.article.creator)
  const [type, setType] = useState(props.article.type)
  const [color, setColor] = useState(props.article.color)
  const [fabric, setFabric] = useState(props.article.fabric)
  const [brand, setBrand] = useState(props.article.brand)
  const [url, setUrl] = useState(props.article.url)
  const [imgUrl, setImgUrl] = useState(props.article.imgUrl)

  const changeName = (e) => {
    setName(e.target.value)
  }
  const changeCreator = (e) => {
    setCreator(e.target.value)
  }
  const changeType = (e) => {
    setType(e.target.value)
  }
  const changeColor = (e) => {
    setColor(e.target.value)
  }
  const changeFabric = (e) => {
    setFabric(e.target.value)
  }
  const changeBrand = (e) => {
    setBrand(e.target.value)
  }
  const changeUrl = (e) => {
    setUrl(e.target.value)
  }
  const changeImgUrl = (e) => {
    setImgUrl(e.target.value)
  }


  const onClick = (e) => {
    e.preventDefault()
    axios.put(`/api/articles/${props.article.id}`, { name, creator, type, color, fabric, brand, url, imgUrl })
      .then(response => {
        console.log("response from put:\n", response);
      }).catch(err => console.log("Error while putting!", err))
    setFlipped(f => !f)
  }

  async function handleDelete() {
    // update route for axios call 
    // axios for be something like "this.props.params"
    let deleted = await axios.delete(`/api/articles/${props.article.id}`)
    console.log(deleted)


  }

  // flip feature in this component.  change to class component. 
  const showCard = () => {
    if (flipped) {
      return (<div>
        <h2>Edit Article</h2>
        <form onSubmit={onClick}>
          <div className="form-containers">
            <label htmlFor="name">Article Name:</label>
            <input type="text" name="name" value={name} onChange={changeName} required />
          </div>

          <div className="form-containers">
            <label htmlFor="creator">Creator:</label>
            <input type="text" name="creator" value={creator} onChange={changeCreator} required />
          </div>

          <div className="form-containers">
            <label htmlFor="type">Type</label>
            <select name="type" value={type} onChange={changeType} required>
              <option value="hat">hat</option>
              <option value="scarf">scarf</option>
              <option value="shirt">shirt</option>
              <option value="button-up">button-up</option>
              <option value="dress">dress</option>
              <option value="skirt">skirt</option>
              <option value="pants">pants</option>
              <option value="shoes">shoes</option>
              <option value="accessories">accessories</option>
              <option value="socks-stockings">socks/stockings</option>
              <option value="sweater">sweater</option>
              <option value="jacket">jacket</option>
            </select>
          </div>

          <div className="form-containers">
            <label htmlFor="color">Color:</label>
            <input type="text" name="color" value={color} onChange={changeColor} required />
          </div>

          <div className="form-containers">
            <label htmlFor="fabric">Fabric:</label>
            <input type="text" name="fabric" value={fabric} onChange={changeFabric} required />
          </div>

          <div className="form-containers">
            <label htmlFor="brand">Brand:</label>
            <input type="text" name="brand" value={brand} onChange={changeBrand} required />
          </div>

          <div className="form-containers">
            <label htmlFor="url">Url:</label>
            <input type="text" name="url" value={url} onChange={changeUrl} required />
          </div>

          <div className="form-containers">
            <label htmlFor="url">Image Url:</label>
            <input type="text" name="imgUrl" value={imgUrl} onChange={changeImgUrl} required />
          </div>
          <div className="form-containers">
            <input type="submit" />
          </div>
        </form>
      </div>)
    } else {
      return (
        <div >
          <h1><a href={url}>{name}</a></h1>
          <img src={imgUrl} alt={name} />
          <p>Created by: {creator}</p>
          <p>Article Type: {type}</p>
          <p>Brand: {brand}</p>
          <p>Color: {color}</p>
          <p>Fabric: {fabric}</p>
          {/* <button onClick={props.onClickEdit}><Link className="nav-link" to="/clothing">Edit</Link></button> */}
        </div>
      );
    }
  }

  return (
    <div className="article-container">
      {showCard()}
      <button ><Link className="back" to="/clothing">Back</Link></button>
      <button onClick={() => setFlipped(f => !f)}>
        Toggle Edit Article
      </button>
      <button onClick={handleDelete}><Link className="delete" to="/clothing">Delete</Link></button>
    </div>
  );
}

export default ItemDetails;
