import React, { useEffect, useState } from 'react'
import { Container, Stack } from '@mui/material';
import api from '../api/api';
import SearchBanner from '../Component/Home/SearchBanner'
import SearchInput from '../Component/Home/SearchInput';
import Carousel from '../Component/Home/Carousel'
import ActiveCard from '../Component/Home/ActiveCard';
import HotCard from '../Component/Home/HotCard';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Spinner from '../Component/Spinner'
import { getAuthorizationHeader } from "../api/headerFunc";
import { useNavigate, NavLink } from 'react-router-dom';



const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true)
  const [bannerImg, setBannerImg] = useState([])
  const [foodData, setFoodData] = useState([])
  const [scenicData, setScenicData] = useState([])
  const [activityData, setActivityData] = useState([])
  const numA = Math.floor(Math.random() * 10);
  const numB = Math.floor(Math.random() * 10);

  // console.log(numA * numB);

  // TODO:random移除前面幾筆
  // Banner Img
  const getBannerImg_URL = `v2/Tourism/ScenicSpot?%24top=5&%24skip=10&%24format=JSON`
  // 活動URL
  const getActivityData_URL = `/v2/Tourism/Activity?%24top=4&%24skip=10&%24format=JSON`

  // 美食URL
  const getFoodData_URL = `/v2/Tourism/Restaurant?$top=4&$skip=${numA * numB}&$format=JSON`
  // 景點URL
  const getScenicData_URL = `/v2/Tourism/ScenicSpot?$select=ScenicSpotName,ScenicSpotID, Address,Picture&$top=4&skip=10&$format=JSON`

  useEffect(() => {
    // getBannerImgs()
    // getFoodData()
    // getScenic()
    // getActivity()
  }, [])

  console.log('random', Math.floor(Math.random() * Math.floor(Math.random() * 100)))


  // 拿banner 圖片(可以跟拿景點資訊同一個API response)
  const getBannerImgs = async () => {
    try {
      const res = await api.get(getBannerImg_URL, {
        headers: getAuthorizationHeader(),
      });
      if (res.status === 200) {
        console.log('banner', res.data)
        setBannerImg(res.data)
        return
      }
    } catch (err) {
      console.log(err)
      const errorCode = err.response.status;
      const errMsg = err.response.status.statusText;
      console.log('拿圖片', errorCode, errMsg)
    }
    finally {
      // setAuthLoading(false)
    }
  };

  // 拿餐廳資料
  const getFoodData = async () => {
    try {
      const res = await api.get(getFoodData_URL, {
        headers: getAuthorizationHeader(),
      });
      if (res.status === 200) {
        console.log('餐廳', res.data)
        setFoodData(res.data)
        return
      }
    } catch (err) {
      console.log(err)
      const errorCode = err.response.status;
      const errMsg = err.response.status.statusText;
      console.log('拿餐廳', errorCode, errMsg)
    }
    finally {
      // setAuthLoading(false)
    }
  };
  // 拿熱門景點
  const getScenic = async () => {
    try {
      const res = await api.get(`/v2/Tourism/ScenicSpot?$top=4&skip=10&$format=JSON`, {
        headers: getAuthorizationHeader(),
      });
      if (res.status === 200) {
        console.log('景點', res.data)
        setScenicData(res.data)
        return
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
  // 拿活動資料
  const getActivity = async () => {
    try {
      const res = await api.get(getActivityData_URL, {
        headers: getAuthorizationHeader(),
      });
      if (res.status === 200) {
        console.log('activity', res.data)
        setActivityData(res.data)
        return
      }
    } catch (err) {
      console.log(err)
      const errorCode = err.response.status;
      const errMsg = err.response.status.statusText;
      console.log('拿活動', errorCode, errMsg)
    }
    finally {
      setLoading(false)
    }
  };


  return (

    <div className='homePage'>
      {loading && <Spinner />}
      {loading ||
        <Container fixed>
          {/* 搜尋欄位 */}
          <Stack
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
                    key={v.ActivityName}
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
                    type='ScenicSpot'
                    ID={v.ScenicSpotID}
                    key={v.Address}
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
                    type='restaurant'
                    ID={v.RestaurantID}
                    key={v.Address}
                    img={v.Picture.PictureUrl1}
                    name={v.RestaurantName}
                    address={v.Address}
                  />
                )
              })}
            </div>
          </div>
        </Container>
      }
    </div>
  )
}

export default Home