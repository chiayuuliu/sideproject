import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../App'
import api from '../api/api';
import { scientCate } from '../Data/CateData'
import { getAuthorizationHeader } from "../api/headerFunc";

import SearchIcon from '@mui/icons-material/Search';
import { Container, Stack, Box, Button, TextField, FormControl, Breadcrumbs, Select, MenuItem, Link, Typography } from '@mui/material';

const SubmitButton = styled(Button)(({ theme }) => ({
  color: '#FFFFFF',
  fontSize: 18,
  fontWeight: 400,
  height: '50px',
  width: '210px',
  letterSpacing: '10px',
  backgroundColor: '#7F977B',
  type: "submit",
  '&:hover': {
    backgroundColor: '#7F977B',
  },
}));
// https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/NewTaipei?$top=32&$skip=32&$select=RestaurantID%2CRestaurantName%2CPicture%2CZipCode%2CClass&$filter=Picture/PictureUrl1%20ne%20null&$format=JSON


// 探索景點細節頁
export const ScenicSpotPage = () => {
  // 成功拿取新北12筆資料
  const getData = `/v2/Tourism/Restaurant/NewTaipei?$top=12&$skip=12&$select=RestaurantID,RestaurantName,Picture,ZipCode,Class&$filter=Picture/PictureUrl1 ne null&$format=JSON`
  const AuthURL = `https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token`

  useEffect(() => {
    getDataTest()
    // getAuth()
  }, [])

  const getDataTest = async () => {
    try {
      const res = await api.get(getData, {
        headers: getAuthorizationHeader(),
      });
      if (res.status === 200) {
        console.log('data', res.data)
      }
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

  // const getAuth = async (e) => {
  //   try {
  //     const res = await api.post(AuthURL, JSON.stringify({
  //       grant_type: "client_credentials",
  //       client_id: 'chiayuu.liu-1bb97440-0b2b-4250',
  //       client_secret: 'cddc5170-a6b1-4c45-9777-2ba0ad321f88',
  //     }));
  //     if (res.data.status) {
  //       console.log(res.data)
  //     }
  //   } catch (err) {
  //     console.log(err)
  //     const errorCode = err.response.status;
  //     const errMsg = err.response.data.data.error_code;
  //     // ErrorMsg(errorCode, errMsg)
  //   } 
  // }

  return (
    <div className='catePage'>
      <Container fixed className='100vh'>
        <div role="presentation" className='breadcrumbWrap'>
          <ThemeProvider theme={theme}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="secondary.main" href="/">
                首頁
              </Link>
              <Typography color="ligntGreen.main">探索景點</Typography>
            </Breadcrumbs>
          </ThemeProvider>
        </div>
        <div className="searchWrap d-flex">
          <Box width='250px'>
            <TextField
              label='探索縣市'
              select
              fullWidth
              size='large'
            >
              <MenuItem value={10} selected>探索景點</MenuItem>
              <MenuItem value={20}>節慶活動</MenuItem>
              <MenuItem value={30}>品嚐美食</MenuItem>
            </TextField>
          </Box>
          <FormControl sx={{ width: "600px", mr: 1 }}>
            <TextField
              id="outlined-basic"
              required
              variant="outlined"
              placeholder='想去哪裡？請輸入關鍵字'
            />
          </FormControl>
          <SubmitButton
            variant="contained">
            <SearchIcon sx={{ mr: 1 }} />
            搜尋
          </SubmitButton>
        </div>

        <h3 className='mt-5 cardTitle'>熱門景點</h3>
        <div className="cateBtnWrap d-flex flex-wrap">
          {scientCate.map((v) => {
            return (
              <div className="cateBtn" key={v.name}>
                <div className="drop"></div>
                <img src={v.img} alt="" />
                <h5>{v.name}</h5>
              </div>
            )
          })}
        </div>
      </Container>
    </div>
  )
}
