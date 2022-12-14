import * as React from 'react';
import PropTypes from 'prop-types';
import { useNavigate, NavLink } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../App'
import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button, } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 200;
// const navItems = ['探索景點', '節慶活動', '品嚐美食'];
const navItems = [
  {
    name: '探索景點',
    link: '/scientSpot',
  },
  {
    name: '節慶活動',
    link: '',
  },
  {
    name: '品嚐美食',
    link: "",
  }
];


function DrawerAppBar(props) {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // 手機版nav
  const drawer = (
    <ThemeProvider theme={theme}>
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2, color: "secondary.main" }}>
          台灣觀光景點
        </Typography>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.name} color='ligntGreen' />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </ThemeProvider>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <AppBar
          component="nav" sx={{ height: '80px', justifyContent: "center" }}
        >
          <Toolbar >
            <IconButton
              color="secondary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              onClick={() => {
                navigate('/');
              }}
            >
              <img src="/Images/Logo-desktop.svg" alt="Logo" />
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button
                  color="secondary"
                  key={item.name} mx={2}
                  onClick={() => {
                    navigate(item.link);
                  }}>
                  {item.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>


        {/* 手機版側邊欄 */}
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;