import React, {Component} from 'react';
import axios from 'axios'

class EditItem extends Component{
  constructor(props){
    super(props)
    const {name, type, color, fabric, brand, url, imgUrl} = this.props.article
    this.state = {
      name,
      type,
      color,
      fabric,
      brand,
      url,
      imgUrl
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    const element = e.target
    const {name, value} = element
    this.setState({
      [name] : value
    })
  }

  async onSubmit(e) {
    let response = await axios.put(`/${this.props.article.id}`, this.state)
    // this.props.onClickEdit()
  }

render() {
  return (
      <form onChange = {this.onChange}>
          <label htmlFor = "name">Name:</label>
          <input type = "text" name = "name" value = {this.state.name} required />
              <br/>
          <label htmlFor = "type">Type</label>
          <select name = "type" value = {this.state.type} required>
              <option value = "hat">hat</option>
              <option value = "shirt">shirt</option>
              <option value = "pants">pants</option>
              <option value = "shoes">shoes</option>
          </select>
      
              <br/>
          <label htmlFor = "color">Color:</label>
          <input type = "text" name = "color" value = {this.state.color} required />
      
              <br/>
          <label htmlFor = "creator">Creator:</label>
          <input type = "text" name = "creator" value = {this.state.creator} required />
      
              <br/>
          <label htmlFor = "fabric">Fabric:</label>
          <input type = "text" name = "fabric" value = {this.state.fabric} required />
      
              <br/>
          <label htmlFor = "url">Url:</label>
          <input type = "text" name = "url" value = {this.state.url} required />
      
              <br/> 
          <label htmlFor = "url">Image Url:</label>
          <input type = "text" name = "imgUrl" value = {this.state.imgUrl} required />
      
              <br/>
          <label htmlFor = "brand">Brand:</label>
          <input type = "text" name = "brand" value = {this.state.brand} required />
          <input type = "submit" onClick = {this.onSubmit} />
      </form>
  );
}

}

export default EditItem;
