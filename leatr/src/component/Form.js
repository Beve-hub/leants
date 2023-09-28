import React, { useState } from 'react'

const Form = () => {
    const [formData, setFormData] = useState({
        username: '',
        Comment: '',
        topic: 'react'
    })

    const handleUsernameChange = (e) => {
        setFormData({
            ...formData,
            username: e.target.value
        });
    }

    const handleCommentChange = (e) => {
        setFormData({
            ...formData,
            Comment: e.target.value
        });
    }

    const handleTopicChange = (e) => {
        setFormData({
            ...formData,
            topic: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`${formData.username} ${formData.Comment} ${formData.topic}`);
      };

  return (
    <form onSubmit={handleSubmit}>
    <div>
        <label>Username</label>
        <input type='text' value={formData.username} onChange={handleUsernameChange}/>
    </div>
    <div>
        <label>Comment</label>
        <textarea value={formData.Comment} onChange={handleCommentChange}/>
    </div>
    <div>
        <label>Topic</label>
        <select value={formData.topic} onChange={handleTopicChange}>
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="angular">Angular</option>
        </select>
    </div> 

    <button type='submit' >Submit</button>
  </form>
  )
}

export default Form
