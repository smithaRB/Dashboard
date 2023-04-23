import React from 'react'
import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SpeakerNotesOutlinedIcon from '@mui/icons-material/SpeakerNotesOutlined';
function Navbar() {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className ="search">
          <input type="text" placeholder='Search...'/>
          <SearchOutlinedIcon/>
        
        </div>
        <div className="items">
          <div className='item'>
          <LanguageOutlinedIcon className='icon'/>
          English
          </div>
          <div className='item'>
          <DarkModeOutlinedIcon className='icon'/>
          
          </div>
          <div className='item'>
          <FullscreenExitOutlinedIcon className='icon'/>
         
          </div>
          <div className='item'>
          <NotificationsOutlinedIcon className='icon'/>
          <div className='counter'>1</div>
        
          </div>
          <div className='item'>
          <ChatBubbleOutlineOutlinedIcon className='icon'/>
          <div className='counter'>2</div>
        
          </div>
          <div className='item'>
          <SpeakerNotesOutlinedIcon className='icon'/>
          
          </div>
          <div className='item'>
         <img src="https://img.freepik.com/free-photo/handsome-young-businessman-with-crossed-arms-smiling-confident_176420-21730.jpg?w=740&t=st=1678624954~exp=1678625554~hmac=81cc964afd79e105fe01d089d12f452a1a3ae37ae01e33163d7453b8e1349215"
         alt=''
         className='avatar'
         />
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar