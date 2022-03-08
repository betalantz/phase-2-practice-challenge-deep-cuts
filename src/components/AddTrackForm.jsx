import React, {useState} from 'react'

function AddTrackForm({ onSubmitTrack}) {

  const [formData, setFormData] = useState({
    image: '',
    title: '',
    artist: '',
    bpm: ''
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    onSubmitTrack(formData)
    setFormData({
      image: '',
      title: '',
      artist: '',
      bpm: ''
    })
  }
  return (
      <form onSubmit={handleSubmit}>
        <div>
          <input onChange={handleChange} value={formData.image} type="text" name="image" placeholder="Image URL"/>
          <input onChange={handleChange} value={formData.title} type="text" name="title" placeholder="title" />
          <input onChange={handleChange} value={formData.artist} type="text" name="artist" placeholder="Artist" />
          <input onChange={handleChange} value={formData.bpm} type="number" name="bpm" placeholder="BPM" step="1.00" />
       </div>
        <input className="" type="submit" value="Add Track" />
      </form>
  )
}

export default AddTrackForm