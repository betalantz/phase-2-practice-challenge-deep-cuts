import React, { useState, useEffect } from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'

function TracksPage() {

  const baseUrl = "http://localhost:8001/tracks"

  const [tracks, setTracks] = useState([])
  const [searchTerm, setSearchTerm] = useState("")    

  useEffect(() => {
    fetch(baseUrl)
      .then(res => res.json())
      .then(setTracks)
  }, [])

  const postNewTrack = ({image, title, artist, bpm}) => {
    const newTrackBody = {
      image,
      title,
      artist,
      BPM: Number(bpm)
    }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTrackBody)
    }
    return fetch(baseUrl, options)
      .then(res => res.json())
  }

  const addTrack = newTrack => {
    console.log('newTrack: ', newTrack);
    postNewTrack(newTrack)
      .then(newTrack => {
        setTracks([...tracks, newTrack])
      })
  }

  const filteredTracks = tracks.filter(track => {
    return track.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          track.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
          track.BPM.toString().includes(searchTerm) 
  })

  return (
    <div>
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
      <AddTrackForm onSubmitTrack={addTrack}/>
      <TracksList tracks={filteredTracks}/>
    </div>
  )
}

export default TracksPage