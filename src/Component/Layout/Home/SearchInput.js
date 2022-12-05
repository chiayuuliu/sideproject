import React from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../../App'
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button, TextField, Stack, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Webcolors } from '../../../App';
import ButtonTest from './Button'

const SubmitButton = styled(Button)(({ theme }) => ({
  color: '#FFFFFF',
  fontSize: 18,
  fontWeight: 400,
  height: '50px',
  letterSpacing: '10px',
  backgroundColor: '#7F977B',
  type: "submit",
  '&:hover': {
    backgroundColor: '#7F977B',
  },
}));



const SearchInput = () => {
  return (
    // <ThemeProvider theme={theme}>
    <Box sx={{ width: '350px' }} className='searchWrap'>
      <Stack spacing={1}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">探索
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="探索"
          >
            <MenuItem value={10} selected>探索景點</MenuItem>
            <MenuItem value={20}>節慶活動</MenuItem>
            <MenuItem value={30}>品嚐美食</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <TextField
            id="outlined-basic"
            required
            variant="outlined"
            placeholder='想去哪裡？請輸入關鍵字'
          />
        </FormControl>
        {/* <LoadingButton
            sx={{ mt: 2, height: '50px', background: Webcolors.lightgreen }}
            fullWidth
            size="large"
            type="submit"
            variant="contained"
          >
            搜尋
          </LoadingButton> */}
        <SubmitButton
          variant="contained">
          <SearchIcon sx={{ mr: 1 }} />
          搜尋
        </SubmitButton>
      </Stack>
    </Box>
    // </ThemeProvider>
  )
}

export default SearchInput