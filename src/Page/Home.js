import React, { useEffect, useState } from 'react'
import { Container, Stack } from '@mui/material';
import api from '../api/api';
import { getAuthorizationHeader } from '../api/headerFunc'
import SearchBanner from '../Component/Layout/Home/SearchBanner'
import SearchInput from '../Component/Layout/Home/SearchInput';
import Carousel from '../Component/Layout/Home/Carousel'


const Home = () => {

  const [bannerImg, setBannerImg] = useState([])
  // URL
  const getData_URL = `/v2/Tourism/ScenicSpot?%24select=Picture&%24top=5&format=JSON`
  const getBannerImg_URL = `/v2/Tourism/ScenicSpot?%24select=Picture&%24top=5&format=JSON`

  // 'https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot?%24select=Picture&%24top=5&%24format=JSON' 
  useEffect(() => {
    getData()
    getBannerImgs()
  }, [])


  const getData = async () => {
    try {
      const res = await api.get(getData_URL);
      console.log('data', res.data)
    } catch (err) {
      console.log(err)
      const errorCode = err.response.status;
      const errMsg = err.response.data.data.error_code;
      // ErrorMsg(errorCode, errMsg);
    }
    finally {
      // setAuthLoading(false)
    }
  };

  const getBannerImgs = async () => {
    try {
      const res = await api.get(getBannerImg_URL);
      console.log('img', res.data)
      setBannerImg(res.data)
    } catch (err) {
      console.log(err)
      const errorCode = err.response.status;
      const errMsg = err.response.data.data.error_code;
      // ErrorMsg(errorCode, errMsg);
    }
    finally {
      // setAuthLoading(false)
    }
  };


  return (

    <div className='homePage'>
      <Container fixed>
        {/* 搜尋欄位 */}
        <Stack
          fullWidth
          margin='auto'
          width='85%'
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <SearchBanner />
          <SearchInput />
        </Stack>
        {/* 輪播牆 */}
        <div className='carouselBanner'>
          <Carousel
            bannerImg={bannerImg}
          />
        </div>
      </Container>
    </div>
  )
}

export default Home