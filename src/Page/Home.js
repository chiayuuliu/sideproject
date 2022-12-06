import React, { useEffect, useState } from 'react'
import { Container, Stack } from '@mui/material';
import api from '../api/api';
import SearchBanner from '../Component/Home/SearchBanner'
import SearchInput from '../Component/Home/SearchInput';
import Carousel from '../Component/Home/Carousel'
import ActiveCard from '../Component/Home/ActiveCard';
import HotCard from '../Component/Home/HotCard';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Home = () => {

  const [bannerImg, setBannerImg] = useState([])
  const [foodData, setFoodData] = useState([])
  const [scenicData, setScenicData] = useState([])
  const [activityData, setActivityData] = useState([])

  // Banner Img
  const getBannerImg_URL = `/v2/Tourism/ScenicSpot?$select=Picture&$top=5&format=JSON`
  // 美食URL
  const getFoodData_URL = `/v2/Tourism/Restaurant?$select=Address, Picture, RestaurantName&$top=4&$skip=4&$format=JSON`
  // 景點URL
  const getScenicData_URL = `/v2/Tourism/ScenicSpot?$select=ScenicSpotName, Address,Picture&$top=4&$format=JSON'`
  // 活動URL
  const getActivityData_URL = `/v2/Tourism/Activity?$select=Address, StartTime,EndTime, ActivityName, Picture, Location&$top=4&$skip=6&$format=JSON`

  useEffect(() => {
    getBannerImgs()
    getFoodData()
    getScenic()
    getActivity()
  }, [])


  // 拿banner 圖片
  const getBannerImgs = async () => {
    try {
      const res = await api.get(getBannerImg_URL);
      // console.log('img', res.data)
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
  const getFoodData = async () => {
    try {
      const res = await api.get(getFoodData_URL);
      // console.log('food', res.data)
      setFoodData(res.data)
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
  // 拿熱門景點
  const getScenic = async () => {
    try {
      const res = await api.get(getScenicData_URL);
      // console.log('senic', res.data)
      setScenicData(res.data)
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

  const getActivity = async () => {
    try {
      const res = await api.get(getActivityData_URL);
      console.log('activity', res.data)
      setActivityData(res.data)
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
        {/* 活動卡 */}
        <div className="homeWrap mb-5">
          <div className="top mb-3 d-flex justify-content-between align-items-center px-2">
            <h3 className='mb-0 cardTitle'>近期活動</h3>
            <p className='viewMore d-flex mb-0'>
              查看更多活動
              <KeyboardArrowRightIcon />
            </p>
          </div>
          <div className="activeCardWrap d-flex justify-content-between flex-wrap">
            {activityData.map((v) => {
              return (
                <ActiveCard
                  img={v.Picture.PictureUrl1}
                  name={v.ActivityName}
                  address={v.Location}
                  startTime={v.StartTime}
                  endTime={v.EndTime}
                />
              )
            })}
          </div>
        </div>
        {/* 景點卡 */}
        <div className="homeWrap mb-4">
          <div className="top mb-3 d-flex justify-content-between align-items-center px-2">
            <h3 className='mb-0 cardTitle'>熱門打卡景點</h3>
            <p className='viewMore d-flex mb-0'>
              查看更多景點
              <KeyboardArrowRightIcon />
            </p>
          </div>
          <div className=" d-flex justify-content-between flex-wrap">
            {scenicData.map((v) => {
              return (
                <HotCard
                  img={v.Picture.PictureUrl1}
                  name={v.ScenicSpotName}
                  address={v.Address}
                />
              )
            })}
          </div>
        </div>
        {/* 美食卡 */}
        <div className="homeWrap mb-4">
          <div className="top mb-3 d-flex justify-content-between align-items-center px-2">
            <h3 className='mb-0 cardTitle'>
              一再回訪美食
            </h3>
            <p className='viewMore d-flex mb-0'>
              查看更多美食
              <KeyboardArrowRightIcon />
            </p>
          </div>
          <div className=" d-flex justify-content-between flex-wrap">
            {foodData.map((v) => {
              return (
                <HotCard
                  img={v.Picture.PictureUrl1}
                  name={v.RestaurantName}
                  address={v.Address}
                />
              )
            })}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Home