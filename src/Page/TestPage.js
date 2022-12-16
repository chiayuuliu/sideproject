import React, { useEffect } from 'react'
import api from '../api/api'
import { getAuthorizationHeader } from "./../api/headerFunc";


export const TestPage = () => {
  console.log(getAuthorizationHeader())
  useEffect(() => {
    getScenic()
  }, [])

  const getScenic = async () => {
    try {
      const res = await api.get(`/v2/Tourism/ScenicSpot?$top=4&skip=10&$format=JSON`);
      if (res.status === 200) {
        console.log('景點', res.data)
      }
    } catch (err) {
      console.log(err)
      const errorCode = err.response.status;
      const errMsg = err.response.status.statusText;
      console.log('拿景點', errorCode, errMsg)
    }
    finally {
      // setAuthLoading(false)
    }
  };
  return (
    <div>TestPage</div>
  )
}
