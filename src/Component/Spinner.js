import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../App'

export default function CircularIndeterminate() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        display: 'flex',
        position: 'absolute',
        left: "50%",
        top: "50%"
      }} >
        <CircularProgress color="inherit" />
      </Box>
    </ThemeProvider>
  );
}