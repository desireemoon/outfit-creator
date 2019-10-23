import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import ItemList from './ItemList'

class CreateOutfit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // UPDATE STATE WHEN BACKEND IS FINISHED
            article1: [],
            article2: [],
            article3: []
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
        // UPDATE API ADDRESS WHEN BACKEND IS COMPLETE
        let response = await Axios.post(``, this.state)
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
                </div>
            </div>
        )
    }
}

export default CreateOutfit