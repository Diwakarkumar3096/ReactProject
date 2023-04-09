import './App.css';
import React, { useState } from 'react';
import Dropdown from './Dropdown'



function App() {
  const items=['React','Node','JavaScript', 'Java','Html','CSS','MySql'];
  const [toggle, setToggle] = useState(false)

  const handleEnter = () => {
     setToggle(true)
  }

  const handleLeave = () => {
    setToggle(!toggle)
  }
  
  return (
    <div className="App">
       <div className='Dropdown-container'>
            <h2>Should you use a Dropdown</h2>
           <div className='dropdown-box'
            onMouseEnter={handleEnter}>
           <h2 id="select">Select</h2> 
           <span><img className="downbtn" onClick={handleLeave} src='https://cdn-icons-png.flaticon.com/512/2985/2985150.png' alt='dropdown'/></span>
        </div>
        {
          toggle &&
          <Dropdown items={items}/>
        }
        
           

       </div>
    </div>
  );
}

export default App;
