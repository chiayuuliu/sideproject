import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';


const HotCard = ({ img, name, address, type, ID }) => {
  const navigate = useNavigate();
  return (
    <div className="hotCard"
      onClick={() => {
        if (type === 'ScenicSpot') {
          navigate(`/ScenicSpot/${ID}`);
        } else {
          navigate(`/Restaurant/${ID}`);
        }
      }}>
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