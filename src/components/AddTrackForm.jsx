import React from 'react'

function AddTrackForm() {
  return (
      <form>
        <div>
          <input type="text" name="image" placeholder="Image URL"/>
          <input type="text" name="title" placeholder="title" />
          <input type="text" name="artist" placeholder="Artist" />
          <input type="number" name="bpm" placeholder="BPM" step="1.00" />
       </div>
        <input className="" type="submit" value="Add Track" />
      </form>
  )
}

export default AddTrackForm