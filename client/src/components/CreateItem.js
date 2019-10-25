import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { useHistory } from "react-router-dom";



class CreateItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            creator: "",
            type: "",
            color: "",
            fabric: "",
            brand: "",
            url: "",
            imgUrl: ""

        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    onChange(e) {
        const element = e.target
        const { name, value } = element
        this.setState({
            [name]: value
        })
    }

    async onSubmit(e) {
        e.preventDefault()
        console.log("checking state:", this.state);
        //   update route of axios call
        let response = await axios.post(`/api/articles`, this.state)
        console.log("checking response:",response);
        if(response) {
            return
        }

    }

    render() {
        return (
            <form onChange={this.onChange}>
                <div className="contains-form">
                    <div className="form-containers">
                        <label htmlFor="name">Article Name:</label>
                        <input type="text" name="name" value={this.state.name} required />
                    </div>

                    <div className="form-containers">
                        <label htmlFor="creator">Creator:</label>
                        <input type="text" name="creator" value={this.state.creator} required />
                    </div>

                    <div className="form-containers">
                        <label htmlFor="type">Type:</label>
                        <select name="type" value={this.state.type} required>
                            <option value="hat">hat</option>
                            <option value="scarf">scarf</option>
                            <option value="shirt">shirt</option>
                            <option value="button-up">button-up</option>
                            <option value="dress">dress</option>
                            <option value="skirt">skirt</option>
                            <option value="pants">pants</option>
                            <option value="shoes">shoes</option>
                            <option value="accessories">accessories</option>
                            <option value="socks-stockings">socks/stockings</option>
                            <option value="sweater">sweater</option>
                            <option value="jacket">jacket</option>
                        </select>
                    </div>

                    <div className="form-containers">
                        <label htmlFor="color">Color:</label>
                        <input type="text" name="color" value={this.state.color} required />
                    </div>

                    <div className="form-containers">
                        <label htmlFor="fabric">Fabric:</label>
                        <input type="text" name="fabric" value={this.state.fabric} required />
                    </div>

                    <div className="form-containers">
                        <label htmlFor="brand">Brand:</label>
                        <input type="text" name="brand" value={this.state.brand} required />
                    </div>

                    <div className="form-containers">
                        <label htmlFor="url">Url:</label>
                        <input type="text" name="url" value={this.state.url} required />
                    </div>

                    <div className="form-containers">
                        <label htmlFor="url">Image Url:</label>
                        <input type="text" name="imgUrl" value={this.state.imgUrl} required />
                        <input className="item-button" type="submit" onClick={this.onSubmit}/>
                    </div>
                </div>
            </form>
        );
    }
}

export default CreateItem;
