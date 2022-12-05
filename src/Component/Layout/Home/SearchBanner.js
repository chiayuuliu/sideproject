import React from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button, Stack } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
const SearchBanner = () => {
  return (
    <Box sx={{
      width: '550px', fontWeight: 300, 
    }}>
      <Stack spacing={1} direction="row" display='flex'>
        <Typography variant="h3" gutterBottom
          sx={{
            fontWeight: 300,
            letterSpacing: '3px'
          }}>
          探索
          <Typography variant="h3">台灣之美</Typography>
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