import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

class CreateOutfit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // UPDATE STATE WHEN OUTFIT ATTRIBUTES ARE DECIDED ON
            name: "",
            creator: ""
        }
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
        let response = await axios.post(``, this.state)
        console.log(response)
    }
    render() {
        return(
            <div className="create-outfit-component">
                <h1>Create Outfit</h1>
                <div className="create-outfit-item-list">
                    <ItemList />
                </div>
                <div className="create-form">
                    <h1>Create Outfit</h1>
                    <form onChange={this.onChange}>
                        {/* UPDATE FORMS WHEN STATE IS DECIDED ON */}
                        <label htmlFor = 'hat'>Hat:</label>
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
                </div>
            </div>
        )
    }
}

export default CreateOutfit