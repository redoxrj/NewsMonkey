// import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react'
import  Navbar  from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter,
  Routes,
  Route
  
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App=()=>{
  
  const [progress, setProgress] = useState(0)
  
    return (
      <BrowserRouter>
      <div >
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Routes>
        <Route  exact path="/" element={<News setProgress ={setProgress} pageSize={12} key='general' country={'in'} category ={'general'} />} />
        <Route  exact path="/business" element={<News setProgress ={setProgress} pageSize={12} key='business' country={'in'} category ={'business'}/>} />
        <Route  exact path="/entertainment" element={<News setProgress ={setProgress} pageSize={12} key='entertainment'  country={'in'} category ={'entertainment'}/>} />
        <Route  exact path="/health" element={<News setProgress ={setProgress} pageSize={12} key='health' country={'in'} category ={'health'}/>} />
        <Route  exact path="/sciences" element={<News setProgress ={setProgress} pageSize={12}  key='sciences' country={'in'} category ={'sciences'}/>} />
        <Route  exact path="/sports" element={<News setProgress ={setProgress} pageSize={12} key='sports'  country={'in'} category ={'sports'}/>} />
        <Route  exact path="/technology" element={<News setProgress ={setProgress} pageSize={12} key='technology'  country={'in'} category ={'technology'}/>} />
        </Routes>
        
      </div>
     </BrowserRouter>
    )
  
}
export default App


