import React, {Component} from 'react'
import { Link, Redirect } from 'react-router-dom'
import Axios from 'axios'

class OutfitDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            outfit: []
        }
    }
    componentDidMount = async () => {
        // UPDATE API ADRESS
        response = await Axios.get(``)
        this.setState({
            outfit: response.data
        })
    }
    delete = async () => {
        // UPDATE API ADRESS
        let deleted = await Axios.delete(``); 
        console.log(`Deleted outfit with ID ${this.props.match.params.id}`);
        // REDIRECT MIGHT NEED ADJUSTMENT 
        if (deleted) {
            <Redirect to={``}/>
        }
    }
    render() {
        return(
            <div className="outfit-detail">
            {/* UPDATE WHEN MORE ARTICLE TABLES ARE ADDED */}
                {this.state.outfit.Hat && 
                <div className="outfit-detail-articles-container">
                    {/* UPDATE WHEN MORE ARTICLE ATTRIBUTES ARE ADDED */}
                     <div className="outfit-details-articles-container-name">{this.state.outfit.Hat.name}</div>
                     <div className="outfit-details-articles-container-creator">{this.state.outfit.Hat.creator}</div>    
                     <div className="outfit-details-articles-container-url">{this.state.outfit.Hat.url}</div>    
                     <div className="outfit-details-articles-container-imgUrl">{this.state.outfit.Hat.imgUrl}</div>
                </div>}
                {this.state.outfit.Shirt && 
                <div className="outfit-detail-articles-container">
                    {/* UPDATE WHEN MORE ARTICLE ATTRIBUTES ARE ADDED */}
                     <div className="outfit-details-articles-container-name">{this.state.outfit.Shirt.name}</div>
                     <div className="outfit-details-articles-container-creator">{this.state.outfit.Shirt.creator}</div>    
                     <div className="outfit-details-articles-container-url">{this.state.outfit.Shirt.url}</div>    
                     <div className="outfit-details-articles-container-imgUrl">{this.state.outfit.Shirt.imgUrl}</div>
                </div>}
                <div className="buttons">
                    <Link to={``}><button className="back" type="button" onclick={}>Back</button></Link>
                    <Link to={``}><button className="edit" type="button" onclick={}>Edit</button></Link>
                    <button className="delete" type="button" onclick={this.delete}>Delete</button>
                </div>
            </div>
        )
    }
}

export default OutfitDetail