import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import DataTable from '../../components/dataTable/DataTable'

function List() {
  return (
    <div className='home'>
      <Sidebar/>
      <div className='homeContainer'>
      <Navbar/>
      <DataTable/>
      </div>
     
      
    
    </div>
  )
}

export default List