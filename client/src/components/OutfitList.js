import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

class OutfitList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            outfits: []
        }
    }
    componentDidMount = async () => {
        response = await Axios.get('')
        console.log(response)
        this.setState({
            outfits: response.data
        })
    }
    render() {
        return(
            <div>
                {this.state.outfits.map(outfit => (
                    <p key={outfit.id}><Link to={``}>{outfit.name}</Link></p>))}
            </div>
        )
    }
}

export default OutfitList