import React, { Component } from 'react'
import axios from "axios"
import ItemDetails from "./ItemDetails"
import { Link } from 'react-router-dom'


class ItemList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
    }

  }
  componentDidMount = async () => {
    // update route for axios call
    let response = await axios.get("/api/articles")
    console.log(`loggin the response`, response.data.articles)
    this.setState({
      articles: response.data.articles
    })
  }

  render() {
    return (
      <div>

        {this.state.articles.map(article => {
          return <div className="article-containers"> 
            <Link to={ (location) => {
              return {
                ...location,
                pathname:`/clothing/${article.id}`,
                article,
              }
            } }
              
             key={article.id} article={article}>{article.name}</Link> 
          </div>
        })}

      </div>
    );
  }

}

export default ItemList;
