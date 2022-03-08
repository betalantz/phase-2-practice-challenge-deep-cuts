import React from 'react'

function Search({ searchTerm, onSearchChange}) {
  return (
    <div className="search">
        <input
        type="text"
        placeholder="Search your Tracks"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        />
        <i className="">🔎</i>

  </div>
  )
}

export default Search