import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

class EditOutfit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // UPDATE WHEN OUTFIT ATTRIBUTES ARE DECIDED ON
            hat: '',
            shirt: '',
            pants: ''
        }
    }
    componentDidMount = async () => {
        // UPDATE API ADRESS
        const response = await Axios.get(``)
        console.log(response)
        this.setState({
            // UPDATE THIS WHEN STATE IS DECIDED ON
            hat: response.data,
            shirt: response.data,
            pants: response.data
        })
    }
    onChange = (e) => {
        // REFERENCE TO ICE CREAM LAB 
        const attribute = e.target;
        const {hat, value} = attribute
        let newValue = {}
        newValue[hat] = value
        this.setState({
            [name]: value
        })
        console.log(this.state)
    }
    onSubmit = async (e) => {
        e.preventDefault()
        // UPDATE API ADRESS
        const update = await Axios.put(``, this.state)
        console.log(update)
    }
    render() {
        return (
            <form onChange={this.onChange}>
            {/* UPDATE FORMS WHEN STATE IS DECIDED ON */}
            <label htmlFor = 'hate'>Hat:</label>
            <input type='text' name= 'hat' value={this.state}></input>
            <br></br>
            <label htmlFor = 'shirt'>Shirt:</label>
            <input type= 'text' name= 'shirt' value={this.state}></input>
            <br></br>
            <label htmlFor = 'pants'>Pants:</label>
            <input type='text' name= 'pants' value={this.state}></input>
            <br></br>
            <input type="submit" onClick={this.onSubmit}></input>
        </form>
        )
    }
}

export default EditOutfit