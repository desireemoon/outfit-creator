import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

class EditOutfit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // UPDATE WHEN OUTFIT ATTRIBUTES ARE DECIDED ON
        }
    }
    componentDidMount = async () => {
        // UPDATE API ADDRESS WHEN BACKEND COMPLETE
        const response = await Axios.get(``)
        console.log(response)
        this.setState({
            // UPDATE THIS WHEN STATE IS DECIDED ON
        })
    }
    onChange = (e) => {
        // UPDATE THIS WHEN STATE IS DECIDED ON
        const {name, value} = e.target;
        let newValue = {}
        newValue[name] = value
        this.setState({
            [name]: value
        })
        console.log(this.state)
    }
    onSubmit = async (e) => {
        e.preventDefault()
        // UPDATE API ADDRESS WHEN BACKEND IS COMPLETE
        let response = await Axios.post(``, this.state)
        console.log(response)
    }
    render() {
        return (
            <form onChange={this.onChange}>
            {/* UPDATE FORMS WHEN STATE IS DECIDED ON */}
            <label htmlFor ='hat'>Article:</label>
            <input type='text' name= 'article1' value={this.state}></input>
            <br></br>
            <label htmlFor = 'shirt'>Article:</label>
            <input type= 'text' name= 'article2' value={this.state}></input>
            <br></br>
            <label htmlFor = 'pants'>Article:</label>
            <input type='text' name= 'article3' value={this.state}></input>
            <br></br>
            <input type="submit" onClick={this.onSubmit}></input>
        </form>
        )
    }
}

export default EditOutfit