import React, { useState } from 'react'
import axios from 'axios'

function PostForm() {
    const [data, setData] = useState({
        userId: '',
        title: '',
        body: ''
    })


    const changeHandler = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(data)
        axios
        .post('https://jsonplaceholder.typicode.com/posts', data)
        .then(response =>{
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
            <input type='text' 
            name='userId'
             value={data.userId}
              onChange={changeHandler} 
               />
        </div>
        <div>
            <input type='text'
             name='title'
             value={data.title}
              onChange={changeHandler}
              />
        </div>
        <div>
            <input type='text'
             name='body'
             value={data.body}
              onChange={changeHandler}
              />
        </div>

        <button type='Submit'>Submit</button>
      </form>
    </div>
  )
}

export default PostForm
