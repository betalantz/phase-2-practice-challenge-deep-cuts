import React from 'react'
import defaultVinyl from '../assets/vinyl_PNG111.png'

function Track({ track }) {

  const { image, title, artist, BPM } = track

  return (
    <tr className="table-row">
        <td className="row-image">
            {/* you can use the default image if no image is given */}
            <img src={image ? image : defaultVinyl} alt="title" />
        </td>
        <td className="row-title">{title}</td>
        <td>{artist}</td>
        <td>{BPM}</td>
    </tr>
  )
}

export default Track