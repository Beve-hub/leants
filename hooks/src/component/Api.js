import React, { useEffect, useState } from 'react'
import  axios from 'axios'

function Api() {

    const [post, setPost] = useState([])
    const [id, setId] = useState(1)
    const [btn, setBtn] = useState(1)


    const handleClick = () => {
        setBtn(id)
    };

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err =>{
             console.log(err)})
    },[btn])
  return (
    <div>
        <input type="text" value={id} onChange={e => setId(e.target.value)}/>
        <button onClick={handleClick}>click</button>
        <div>{post.title}</div>
        
      {/*<ul>
        {
            post.map(post => <li key={post.id}>{post.title}</li>)
        }
      </ul>*/} 
    </div>
  )
}

export default Api
