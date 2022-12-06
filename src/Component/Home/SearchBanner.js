import React from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button, Stack } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import { BorderBottom } from '@mui/icons-material';
const SearchBanner = () => {
  return (
    <Box sx={{
      width: '550px', fontWeight: 300,
    }}>
      <Stack spacing={1} direction="row" mb={1}>
        <Typography variant="h3"
          sx={{
            fontWeight: 300,
            letterSpacing: '3px'
          }}>
          探索
        </Typography>
        {/* <h3>台灣之美</h3> */}
        <Typography variant="h3"
          sx={{
            fontWeight: 300,
            letterSpacing: '3px',
            BorderBottom: "1px solid red"
          }}>台灣之美
          </Typography>
      </Stack>
      <Typography variant="h3" gutterBottom
        sx={{
          fontWeight: 300,
          letterSpacing: '3px'
        }}>
        讓我們更親近這片土地
      </Typography>
      <Typography variant="body1"
        sx={{
          display: 'flex',
          alignItems: "center",
          fontWeight: 300,
          letterSpacing: '3px'
        }}>
        <RoomIcon sx={{ color: "#E0DA48" }} />
        台灣旅遊景點導覽 Taiwan Travel Guide
      </Typography>
    </Box>
  )
}

export default SearchBanner