import React, { Component } from 'react';
import './App.css';
import Navebar from './component/Navebar.js';
import News from './component/News.js';
import Home from './component/Home'
import Demo from './component/demo'
// import PageNotFound from './component/PageNotFound';
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

class App extends Component {
    
    render() {
 
      return (
        <>
        <Navebar />
     {/* <Home/> */}
        {/* <News pageSize={10} country='in' category='science' /> */}
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/demo' element={<Demo/>} />
          <Route path='/:type' element={<News />} />
          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </>
    );
  }
}
export default App;
