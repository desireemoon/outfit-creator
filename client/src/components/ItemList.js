import React, {Component} from 'react'
import axios from "axios"
import ItemDetails from "./ItemDetails"
import {Link} from 'react-router-dom'


class ItemList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
     
    }
   
  }
  componentDidMount = async () => {
    // update route for axios call
    let response = await axios.get("")
    console.log(response.data)
    this.setState({
      articles:response.data 
    })
   
    
  }

  render() {
  return (
    <div>
    
      {this.state.articles.map(article => {
        return <Link to={`/clothing/${article.id}`} key = {article.id} article = {article} />
      })}
    
  
    </div>
  );
}

}

export default ItemList;
