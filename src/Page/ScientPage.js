import React from 'react'
import { styled } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../App'
import { scientCate } from '../Data/CateData'
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


// 探索景點細節頁
export const ScientPage = () => {
  console.log('data', scientCate)
  return (
    <div className='scientPage'>
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
