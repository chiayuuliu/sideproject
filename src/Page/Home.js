import React from 'react'
import { Container, Stack } from '@mui/material';
import SearchBanner from '../Component/Layout/Home/SearchBanner'
import SearchInput from '../Component/Layout/Home/SearchInput';
import Carousel from '../Component/Layout/Home/Carousel'
const Home = () => {
  return (

    <div className='homePage'>
      <Container
        fixed
      >
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
          <Carousel />
        </div>

      </Container>
    </div>
  )
}

export default Home