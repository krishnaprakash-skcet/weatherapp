import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

import './Main.css'
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
export default function SignInSide() {
  
  const Navigate = useNavigate();
  const next = () =>
  {
    Navigate('/App')
  }
  const Nav = useNavigate();
  const goSea = () =>
  {
    Navigate('/Seasons')
  }
  const Navig = useNavigate();
  const goNews = () =>
  {
    Navigate('/News')
  }
  const Navigatme = useNavigate();
  const goAbout = () =>
  {
    Navigate('/About')
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7} className='Grid'>
          <div className='logo'> <br></br>
             
           <img src="https://cdn2.iconfinder.com/data/icons/web-and-ui-15/20/740-64.png"  ></img> 
           <br></br><br></br>
             <div>
             <ul>
              <li class="li2"></li>         
              <li class="li2"><button onClick={goNews} className='button'>Updates</button></li>
              <li class="li2"><button onClick={goSea} className='button'>Seasons</button></li>
              <li class="li2"><button onClick={goAbout} className='button'>About us</button></li>
              
              </ul>

            </div>
            <div className='line1'>
            
              <h1 className='perusu'>Your Daily Weather Dose, Accurate and Close!</h1><br></br>
            </div><br></br>
            <div className='line2'>
               <h3>Ezy Weather is an user-friendly website which enables the user<br></br> to forecast the weather of their desired location in just a click!<br></br> We also provide live news feed on weather and have a lot of other <br></br>valuable information and facts on weather.</h3>
            </div>
              <div className='icon'><br></br><br></br>
             <img src='https://cdn-icons-png.flaticon.com/128/1384/1384031.png' height={40}></img> <img src='https://cdn-icons-png.flaticon.com/128/2168/2168281.png' height={40}></img> <img src='https://cdn-icons-png.flaticon.com/128/733/733635.png' height={40}></img><img src='https://cdn-icons-png.flaticon.com/128/1384/1384014.png'height={40}></img> <img src='https://cdn-icons-png.flaticon.com/128/4494/4494467.png' height={40}></img>
              </div>
           </div>
        </Grid>
          
          
        <Grid className='gid' item xs={12} sm={8} md={5} component={Paper} elevation={8} square >
          <Box
            sx={{
              my: 0,
              mx: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor:'black'
            }}
            ><br></br><br></br>
            <img src={'https://th.bing.com/th/id/R.72f3a789212978f1972a5bf8839a71db?rik=YB3A7Dt2VCyrgg&riu=http%3a%2f%2fi252.photobucket.com%2falbums%2fhh33%2fdrossphd%2frevolving-earth-2.gif&ehk=q9wRpZoxNq1XIYsQuXvSScBGTf0fFHt1z%2fn8Mu6UVks%3d&risl=1&pid=ImgRaw&r=0'} className="App-logo" alt="logo" /><br></br><br></br><br></br>
            <div className='text'>
            <br></br>
              <h3>Ezy Weather</h3>  
            </div>    
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <br></br><br></br><br></br>
              <button onClick={next} class="button-25" role="button" >Start Forecast</button>
              <br></br>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}