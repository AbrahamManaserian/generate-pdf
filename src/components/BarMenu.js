import { Box, Drawer, Grid, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import LogoImage from '../images Paul/logo-new.png';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { useState } from 'react';

export default function BarMenu() {
  const location = useLocation();
  console.log(location);
  const [openDrawer, setOPenDrawer] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOPenDrawer(open);
  };
  return (
    <Grid
      item
      xs={12}
      container
      sx={{ bgcolor: 'black', height: '77px', position: 'sticky', top: 0 }}
      alignItems="center"
    >
      <Box sx={{ marginLeft: { xs: '15px', sm: '38px' } }}>
        <Link to="/">
          <img src={LogoImage} style={{ width: 'auto', height: '6vh' }} />
        </Link>
      </Box>
      <Grid
        sx={{ height: '100%', display: { xs: 'none', sm: 'flex' } }}
        item
        xs
        container
        justifyContent="flex-end"
        alignItems="center"
      >
        {/* <Box sx={{ display: 'flex', height: '100%', alignItems: 'center' }}> */}
        <Link
          style={{ color: location.pathname.includes('about') ? 'red' : '' }}
          className="link-rout"
          to="/about"
        >
          About Us
        </Link>
        <Link
          style={{ color: location.pathname.includes('services') ? 'red' : '' }}
          className="link-rout"
          to="/services"
        >
          Services
        </Link>
        <Link
          style={{ color: location.pathname.includes('blog') ? 'red' : '' }}
          className="link-rout"
          to="/blog"
        >
          Blog
        </Link>
        <Link
          style={{ color: location.pathname.includes('contact') ? 'red' : '' }}
          className="link-rout"
          to="/contact"
        >
          Contact
        </Link>
      </Grid>
      <Box
        sx={{
          marginRight: '15px',
          flexGrow: 1,
          display: { xs: 'flex', sm: 'none', md: 'none', lg: 'none', xl: 'none', justifyContent: 'flex-end' },
        }}
      >
        <FormatListBulletedIcon
          sx={{ color: 'white', fontSize: '40px' }}
          cursor="pointer"
          onClick={toggleDrawer(true)}
        />
      </Box>
      <Drawer
        sx={{ '& .MuiDrawer-paper': { backgroundColor: 'black' } }}
        anchor="right"
        open={openDrawer}
        onClose={toggleDrawer(false)}
      >
        <Box onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <Link
            style={{ color: location.pathname.includes('about') ? 'red' : '' }}
            className="link-rout"
            to="/about"
          >
            About Us
          </Link>
          <Link
            style={{ color: location.pathname.includes('services') ? 'red' : '' }}
            className="link-rout"
            to="/services"
          >
            Services
          </Link>
          <Link
            style={{ color: location.pathname.includes('blog') ? 'red' : '' }}
            className="link-rout"
            to="/blog"
          >
            Blog
          </Link>
          <Link
            style={{ color: location.pathname.includes('contact') ? 'red' : '' }}
            className="link-rout"
            to="/contact"
          >
            Contact
          </Link>
        </Box>
      </Drawer>
    </Grid>
  );
}
