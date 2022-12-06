import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const ActiveCard = ({ img, name, address, startTime, endTime }) => {
  console.log(address, startTime.substr(0, 10), endTime.substr(0, 10))
  return (
    <div className="activeCard d-flex">
      <div className="imgBox">
        <img src={img} alt="" />
      </div>
      <div className="context">
        <p className="date">{startTime.substr(0, 10)}~{endTime.substr(0, 10)}</p>
        <h5>{name}</h5>
        <div className="bottom d-flex  justify-content-between mt-4">
          <p className='mb-0'>
            <LocationOnIcon
              className='locationIcon'
            />
            {address.substr(0, 3)}
          </p>
          <p className="detail mb-0 d-flex">
            詳細介紹<KeyboardArrowRightIcon />
          </p>
        </div>
      </div>
    </div>
  )
}

export default ActiveCard