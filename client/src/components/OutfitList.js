import React, { Component } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


class OutfitList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      outfits: [],
    }

  }
  componentDidMount = async () => {
    // update route for axios call
    let response = await axios.get("/api/outfits")
    console.log(`loggin the response`, response.data.outfits)
    this.setState({
      outfits: response.data.outfits
    })
  }

  render() {
    return (
      <div className="article-list-container">
        {this.state.outfits.map(outfit => {
          return <div className="outfit-container1"> 
           <div className="article-container-two">
            <Link to={ (location) => {
              return {
                ...location,
                pathname:`/outfits/${outfit.id}`,
                outfit,
              }
            } }
              
             key={outfit.id} outfit={outfit}>{outfit.name}</Link> 
          </div>
          </div>
        })}

      </div>
    );
  }

}

export default OutfitList;