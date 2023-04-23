import React from 'react';
import { Featured } from '../../components/featured/Featured';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Widget from '../../components/widget/Widget';
import {Charts}  from '../../components/chart/Charts';
import {List} from "../../components/table/Table"
import "./Home.scss";
function Home() {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
         <div className='widgets'>
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
         
         </div>
         <div className='charts'>
          <Featured/>
          <Charts/>
         </div>
         <div className="listContainer">
          <div className="listTitle">
            Latest Transactions
            <List/>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Home