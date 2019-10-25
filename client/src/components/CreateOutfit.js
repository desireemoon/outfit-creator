import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import ItemList from './ItemList'

class CreateOutfit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // UPDATE STATE WHEN BACKEND IS FINISHED
            name: "",
            creator: "",
            articles: [],
            articleId: []
        }
    
    }

    
    componentDidMount = async () => {
        // update route for axios call
        let response = await Axios.get("/api/articles")
        console.log(`loggin the response`, response.data.articles)
        this.setState({
          articleId: response.data.articles
        })
        
        
      }
    onChange = (e) => {
        // UPDATE THIS WHEN STATE IS DECIDED ON
        const { name, value } = e.target;
        let newValue = {}
        newValue[name] = value
        this.setState({
            [name]: value
        })
        console.log(this.state)
    }
    onSubmit = async (e) => {
        e.preventDefault()
        console.log("checking all states", this.state.name, this.state.creator, this.state.articles );
        console.log("state as a whole", this.state);
        // UPDATE API ADDRESS WHEN BACKEND IS COMPLETE
        let response = await Axios.post(`/api/outfits`, this.state)
        console.log(response)
    }
    handleClick = (id) => {
        this.setState({
            articles: this.state.articles.concat({'id': id})
        })
        console.log("handleClick logging article ids 2", this.state.articles)
        // if (this.state.articles.includes({'id': id.id})) {
        //     return 
        // }
    }
    render() {
        return (
            <div className="create-outfit-component">
                <h1>Create Outfit</h1>
                <div className="create-form">
                    <form onChange={this.onChange}>
                        <div className="form-containers">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" value={this.state.name} required />
                        </div>
                        <div className="form-containers">
                            <label htmlFor="creator">Creator:</label>
                            <input type="text" name="creator" value={this.state.creator} required />
                        </div>
                    </form>
                </div>

                <div className="create-outfit-item-list">
                    {this.state.articleId.map(article => {
                        return(
                            <div className="article-containers"> 
                                <p>{article.name}</p>
                                {this.state.articles.includes({'id': article.id}) ?
                                <button>Remove</button> : <button value="Add" onClick={() => this.handleClick(article.id)}></button>}
                            </div>
                        )
                    })}
                <button type="submit" onClick={this.onSubmit}>Submit</button>
                </div>
            </div>
        )
    }
}

export default CreateOutfit