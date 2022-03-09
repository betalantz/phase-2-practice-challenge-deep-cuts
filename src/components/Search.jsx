import React from 'react'

function Search() {
  return (
    <div className="search">
        <input
          type="text"
          placeholder="Search your Tracks"
          onChange={() => console.log("Searching...")}
        />
        <i>🔎</i>
  </div>
  )
}

export default Search