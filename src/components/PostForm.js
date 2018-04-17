import React, { Component } from 'react'

class PostForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    }
  }

  render() {
    return (
      <div>
        <h2>Add Posts</h2>
        <form>
          <div>
            <label>Title: </label><br/>
            <input type="text" name="title"/>
          </div>
          <br/>
          <div>
            <label>Description: </label><br/>
            <textarea name="description"/>
          </div>
          <br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm;
