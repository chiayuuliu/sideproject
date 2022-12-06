import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';

const HotCard = ({ img, name, address }) => {
  return (
    <div className="hotCard">
      <div className="imgBox mb-1">
        <img src={img} alt="" />
      </div>
      <p className="name mb-1 ">{name}</p>
      <p className='place flex-wrap'>
        <LocationOnIcon className='locationIcon' />
        {address ? address.substr(0, 3) : ""}
      </p>
    </div>
  )
}

export default HotCard