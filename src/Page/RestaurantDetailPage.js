import React, { useEffect, useState } from 'react'
import api from '../api/api';
import { getAuthorizationHeader } from "../api/headerFunc";
import { Banner } from '../Component/DetailPage/Banner';
import SearchIcon from '@mui/icons-material/Search';
import { Container, Stack, Box, Button, TextField, FormControl, Breadcrumbs, Select, MenuItem, Link, Typography } from '@mui/material';

import { useParams, useNavigate } from "react-router-dom";

// 探索景點細節頁
export const RestaurantDetailPage = () => {
  const { RestaurantID } = useParams();
  const [detail, setDetail] = useState([])
  const getDetail_URL = `/v2/Tourism/Restaurant?%24filter=RestaurantID%20eq%20%27${RestaurantID}%27&%24format=JSON`


  useEffect(() => {
    getRestaurantDetail()
  }, [])

  // 拿熱門景點
  const getRestaurantDetail = async () => {
    try {
      const res = await api.get(getDetail_URL, {
        headers: getAuthorizationHeader(),
      });
      console.log(res.data[0])
      setDetail(res.data[0])

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
    <div className='scenicSpotPage'>
      <Container >
        <div className='carouselBanner'>
          {detail.Picture &&
            <Banner
              imgArr={detail.Picture}
            />}
        </div>
        <div className="content">
          <h3 className='mb-2 cardTitle'>{detail.RestaurantName}</h3>
          <Typography variant="h6" display="block" gutterBottom>
            餐廳介紹：
          </Typography>
          <Typography variant="body1" gutterBottom mb={7}>
            {detail.Description}
          </Typography>
          <div className="infoWrap">
            <Stack className='px-4 pt-3 infoCard'>
              <p>
                <strong>營業時間：</strong>
                <span> {detail.OpenTime}</span>
              </p>
              <p>
                <strong>服務電話：</strong>
                <span>{detail.Phone}</span>
              </p>
              <p>
                <strong>餐廳地址：</strong>
                <span>{detail.Address}</span>
              </p>
              <p>
                <strong>官方網站：</strong>
                {detail.WebsiteUrl ?
                  <a href={detail.WebsiteUrl}>連結</a>
                  :
                  <span> 無提供</span>}

              </p>
            </Stack>
            {/* 周邊資訊 */}
            {/* </div> */}
            {/* 有時間在做 */}
            {/* <div className="mapCard"></div> */}
          </div>
          <div className="others">
            <h3 className='mb-2 cardTitle'>還有這些不能錯過的景點</h3>
            <div className=" d-flex justify-content-between">

            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
