import React, { Component } from 'react'

class Posts extends Component {

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <div>
        <h2>Posts</h2>
      </div>
    )
  }
}

export default Posts;
