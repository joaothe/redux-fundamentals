import {FETCH_POSTS, NEW_POST} from './types';

export const fetchPosts = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts_data => dispatch({
      type: FETCH_POSTS,
      payload: posts_data
    }));
};

export const createPost = (postData) => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    
  })
    .then(res => res.json())
    .then(data => console.log(data));
};
