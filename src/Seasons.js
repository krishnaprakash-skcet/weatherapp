import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Season.css'
const drawerWidth = 240;
const navItems = [];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List >
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar className='menu'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography className='clr'
            variant="h6"
            component="div" 
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Seasons
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
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
      </nav>
      <Box component="main" sx={{ p: 3 }} className='bg'>
        <Toolbar />
        <Typography className='cen'>
        A season is a period of the year that is distinguished by special climate conditions. The four seasons—spring, summer, fall, and winter—follow one another regularly. Each has its own light, temperature, and weather patterns that repeat yearly.

        In the Northern Hemisphere, winter generally begins on December 21 or 22. This is the winter solstice, the day of the year with the shortest period of daylight. Summer begins on June 20 or 21, the summer solstice, which has the most daylight of any day in the year. Spring and fall, or autumn, begin on equinoxes, days that have equal amounts of daylight and darkness. The vernal, or spring, equinox falls on March 20 or 21, and the autumnal equinox is on September 22 or 23.
        
        The seasons in the Northern Hemisphere are the opposite of those in the Southern Hemisphere. This means that in Argentina and Australia, winter begins in June. The winter solstice in the Southern Hemisphere is June 20 or 21, while the summer solstice, the longest day of the year, is December 21 or 22.
        
        Seasons occur because Earth is tilted on its axis relative to the orbital plane, the invisible, flat disc where most objects in the solar system orbit the sun. Earth’s axis is an invisible line that runs through its center, from pole to pole. Earth rotates around its axis.
        
        In June, when the Northern Hemisphere is tilted toward the sun, the sun rays hit it for a greater part of the day than in winter. This means it gets more hours of daylight. In December, when the Northern Hemisphere is tilted away from the sun, with fewer hours of daylight.
        
        Seasons have an enormous influence on vegetation and plant growth. Winter typically has cold weather, little daylight, and limited plant growth. In spring, plants sprout, tree leaves unfurl, and flowers blossom. Summer is the warmest time of the year and has the most daylight, so plants grow quickly. In autumn, temperatures drop, and many trees lose their leaves.
        
        The four-season year is typical only in the mid-latitudes. The mid-latitudes are places that are neither near the poles nor near the Equator. The farther north you go, the bigger the differences in the seasons. Helsinki, Finland, sees 18.5 hours of daylight in the middle of June. In mid-December, however, it is light for less than six hours. Athens, Greece, in southern Europe, has a smaller variation. It has 14.5 hours of daylight in June and 9.5 hours in December.
        
        Places near the Equator experience little seasonal variation. They have about the same amount of daylight and darkness throughout the year. These places remain warm year-round. Near the Equator, regions typically have alternating rainy and dry seasons.
        
        Polar regions experience seasonal variation, although they are generally colder than other places on Earth. Near the poles, the amount of daylight changes dramatically between summer and winter. In Barrow, Alaska, the northernmost city in the U.S., it stays light all day long between mid-May and early August. The city is in total darkness between mid-November and January.<br></br>
        
        <h1><b>FAST FACT</b></h1>

<b>Seasons in Alaska:</b><br></br>
<p>
Sometimes, seasons are determined by both natural and artificial activity. In the U.S. state of Alaska, people like to say there are three seasons: "winter, still winter, and construction season.</p>
<img src='data:image/jpeg;base64,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'/> <br></br>
  <div >
  <b>Meteorological Seasons</b><br></br><br></br>
  Meteorologists, scientists who study the weather, divide each of the seasons into three whole months. Spring begins March 1, summer begins June 1, autumn begins September 1, and winter begins December 1.      
  </div>
  </Typography>
     
      </Box>
    </Box>
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