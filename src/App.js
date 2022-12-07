import './App.css';
import { Route, Routes } from "react-router-dom";
import { createTheme } from '@mui/material/styles';
import Home from './Page/Home';
import Layout from './Component/Layout'
import { ScientPage } from './Page/ScientPage';

// 顏色設定
export const theme = createTheme({
  palette: {
    // 背景白
    primary: {
      main: '#FFFFFF',
    },
    // 綠色
    secondary: {
      main: '#646464',
    },
    // 淺綠
    ligntGreen: {
      main: '#7F977B',
    },

  },
});

export const Webcolors = {
  background: "#FFFFFF", //背景白
  darkgreen: "#646464", //文字深綠
  lightgreen: "#7F977B", //淺綠
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/scientSpot" element={<ScientPage />} />
      </Route>
    </Routes>
  );
}

export default App;
