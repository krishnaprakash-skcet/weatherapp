import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import SignInSide from './signin';
import SignUp from './signup';
import App from './App';
import Main from './Main'
import Seasons from './Seasons'
import News from './News';
import About from './About'
const Navi = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<SignInSide/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/App'  element={<App/>}/>
        <Route path='/Main'  element={<Main/>}/>
        <Route path='/Seasons'  element={<Seasons/>}/>
        <Route path='/News' element={<News/>}/>
        <Route path='/About' element={<About/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export  default Navi;