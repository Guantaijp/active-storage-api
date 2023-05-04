import { AppContext } from '../App'
import React, { useContext } from 'react'

function FileForm() {

  const { latestPost, setLatestPost } = useContext(AppContext)

  function handleSubmit(event){
    event.preventDefault()
    const data = new FormData()
    data.append('post[title]', event.target.title.value)
    data.append('post[image]', event.target.image.files[0])
    submitToApi(data)
  }

  function submitToApi(data){
    fetch('http://localhost:3000/posts', {
      method: 'POST',
      body: data
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setLatestPost(data.image_url)
    })
    .catch (error => console.error(error))
  }

  return (
    <div>
        <h1 className="text-center">File form</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" />
            <br />

            <label htmlFor="image">Image</label>
            <input type="file" name="image" id="image" />

            <br />
            <button type="submit">Upload</button>

            </form>
      
    </div>
  )
}

export default FileForm
