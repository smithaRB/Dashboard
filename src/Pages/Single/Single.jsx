import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'

function Single() {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="top">
          <div className="lrft">
            <h1 className="title">Information </h1>
            <div className="item">
              
            </div>
          </div>
          <div className="right">

          </div>
        </div>
        <div className="bottom">

        </div>
      </div>
    </div>
  )
}

export default Single