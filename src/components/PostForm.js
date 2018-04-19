import React, {Component} from 'react'

class PostForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'sd',
      description: 'ds'
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  onSubmit(event) {
    event.preventDefault();

    const post = {
      title: this.state.title,
      description: this.state.description
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(data => console.log(data));

  }

  render() {
    return (
      <div>
        <h2>Add Posts</h2>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label><br/>
            <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
          </div>
          <br/>
          <div>
            <label>Description: </label><br/>
            <textarea name="description" onChange={this.onChange} value={this.state.description} />
          </div>
          <br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm;
