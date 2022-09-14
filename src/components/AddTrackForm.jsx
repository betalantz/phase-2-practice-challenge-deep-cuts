import React, {useState} from 'react'

const defaultFormData = {
    image: '',
    title: '',
    artist: '',
    BPM: ''
}

function AddTrackForm({ onSubmitTrack}) {

  const [formData, setFormData] = useState(defaultFormData)

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    onSubmitTrack(formData)
    setFormData(defaultFormData)
  }
  return (
      <form onSubmit={handleSubmit}>
        <div>
          <input onChange={handleChange} value={formData.image} type="text" name="image" placeholder="Image URL"/>
          <input onChange={handleChange} value={formData.title} type="text" name="title" placeholder="title" />
          <input onChange={handleChange} value={formData.artist} type="text" name="artist" placeholder="Artist" />
          <input onChange={handleChange} value={formData.BPM} type="number" name="BPM" placeholder="BPM" step="1.00" />
       </div>
        <input className="" type="submit" value="Add Track" />
      </form>
  )
}

export default AddTrackForm