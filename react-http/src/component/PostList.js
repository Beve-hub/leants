import React, {useState, useEffect} from 'react'
import axios from 'axios'

function PostList() {
    const [posts, setPost] = useState([])
    const [errorMsg, setErrorMsg] = useState('')

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            console.log(response);
            setPost(response.data);
        })
        .catch((error) => {
            console.log(error);
            setErrorMsg(error.message);
        });
    }, [])

  return (
    <div>
      <h2>List of posts</h2>
      {
        posts.length ?
         posts.map((post) => <div key={post.id}>{post.title}</div>) :
         null
      }
      {errorMsg ? <div>{errorMsg}</div> : null}
    </div>
  )
}

export default PostList
