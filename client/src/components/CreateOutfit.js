import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

class CreateOutfit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // state will be whatever outfit attributes are being input by user
            hat: []
        }
    }
    onChange = (e) => {
        const attribute = e.target;
        const {name, value} = attribute
        let newValue = {}
        newValue[name] = value
        this.setState({
            [name]: value
        })
        console.log(this.state)
    }
    onSubmit = async (e) => {
        e.preventDefault()
        let response = await axios.post(`http://localhost:4567/api`, this.state)
        console.log(response)
    }
    render() {
        return(
            <div className="create-outfit-component">
                <div className="create-outfit-item-list">
                    <ItemList />
                </div>
                <div className="create-form">
                    <form onChange={this.onChange}>
                        <label htmlFor = 'name'>Hat:</label>
                        <input type='text' name= 'name' value={this.state.name}></input>
                        <br></br>
                        <label htmlFor = 'age'>Shirt:</label>
                        <input type= 'number' name= 'age' value={this.state.age}></input>
                        <br></br>
                        <label htmlFor = 'breed'>Pants:</label>
                        <input type='text' name= 'breed' value={this.state.breed}></input>
                        <br></br>
                        <input type="submit" onClick={this.onSubmit}></input>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateOutfit