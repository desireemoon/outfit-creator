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
                <div className="outfit-detail-articles-container">
                    <div className="outfit-detail-article">

                    </div>
                    <div className="outfit-detail-article">
                        
                    </div>
                    <div className="outfit-detail-article">
                        
                    </div>                                        
                </div>
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