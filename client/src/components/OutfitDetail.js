import React, {Component} from 'react'
import { Link, Redirect } from 'react-router-dom'
import Axios from 'axios'
import OutfitDetailContainer from './OutfitDetailContainer'
import EditOutfit from './EditOutfit'

class OutfitDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFlipped: false,
            outfit: []
        }
    }
    componentDidMount = async () => {
        // UPDATE API ADRESS
        let response = await Axios.get(``)
        this.setState({
            outfit: response.data
        })
    }
    onClickEdit = () => {
        this.setState({
            isFlipped: !this.state.isFlipped
        })
    }
    render() {
        return(
            <div className="outfit-detail">
                {this.state.isFlipped ? <EditOutfit outfit = {this.props.outfit} onClickEdit={this.onClickEdit}/> : <OutfitDetailContainer outfit = {this.props.outfit} onClickEdit={this.onClickEdit}/>}
            </div>
        )
    }
}

export default OutfitDetail