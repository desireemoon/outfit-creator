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
        }


        // "name": "Kenneth's outfit",
        //     "creator": "Kenneth",
        //     "articles": [
        //     	{"id": 1},
        //     	{"id": 2},
        //     	{"id": 6}
        //     	]
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
        // UPDATE API ADDRESS WHEN BACKEND IS COMPLETE
        let response = await Axios.post(``, this.state)
        console.log(response)
    }

    Article = (id) => {
        this.id = id;
      }
      
    // const sei = new Cohort('SEI Cicadas NYC', 29);

    render() {
        return (
            <div className="create-outfit-component">
                <div className="create-title">
                    <h1>Create Outfit</h1>
                </div>
                <div className="create-form">
                    <form onChange={this.onChange}>
                        <div className="form-containers">
                            <div>
                            <label htmlFor="name">Article Name:</label>
                            </div>
                            <input type="text" name="name" value={this.state.name} required />
                        </div>
                        <div className="form-containers">
                            <div>
                            <label htmlFor="creator">Creator:</label>
                            </div>
                            <input type="text" name="creator" value={this.state.creator} required />
                        </div>
                    </form>
                </div>

                <div className="create-outfit-item-list">
                    <ItemList />
                </div>

            </div>
        )
    }
}

export default CreateOutfit


// grab name in string
// grab creator in string
// grab article id(integer) in object
// put id object into article array 