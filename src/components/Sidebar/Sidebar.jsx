import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ViewQuiltTwoToneIcon from '@mui/icons-material/ViewQuiltTwoTone';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import AssessmentSharpIcon from '@mui/icons-material/AssessmentSharp';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsSharpIcon from '@mui/icons-material/SettingsApplicationsSharp';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='top'>
                <span className="log">lamadmin</span>
            </div>
            <hr/>
            <div className='center'>
                <ul>
                    <p className='title'>MAIN</p>
                    <li>
                    <DashboardIcon className='icon'/>
                        <span>Dashboard</span>
                    </li>
                </ul>
                <ul>
                <p className='title'>Users</p>
                    <li>
                        <PersonOutlineOutlinedIcon className='icon'/>
                        <span>Users</span>
                    </li>
                </ul>
                <ul>
                <p className='title'>MAIN</p>
                    <li>
                        <Inventory2OutlinedIcon className='icon'/>
                        <span>Products</span>
                    </li>
                </ul>
                <ul>
                    <li><ViewQuiltTwoToneIcon className='icon'/>
                        <span>Orders</span>
                    </li>
                </ul>
                <ul>
                    <li><LocalShippingRoundedIcon className='icon'/>
                        <span>Delivery</span>
                    </li>
                </ul>
             
                <ul>
                <p className='title'>USEFUL</p>
                    <li><AssessmentSharpIcon className='icon'/>
                        <span>Stats</span>
                    </li>
                </ul>
                <ul>
                    <li><NotificationsNoneSharpIcon className='icon'/>
                        <span>Notification</span>
                    </li>
                </ul>
               
                <ul>
                <p className='title'>SERVICE</p>
                    <li><SettingsSystemDaydreamOutlinedIcon className='icon'/>
                        <span>System Health</span>
                    </li>
                </ul>
                <ul>
                    <li><PsychologyOutlinedIcon className='icon'/>
                        <span>Logs</span>
                    </li>
                </ul>
                <ul>
                    <li><SettingsApplicationsSharpIcon className='icon'/>
                        <span>Settings</span>
                    </li>
                </ul>
                <ul>
                <p className='title'>USER</p>
                    <li><AccountBoxOutlinedIcon className='icon'/>
                        <span>Profile</span>
                    </li>
                </ul>
                <ul>
                    <li><ExitToAppIcon className='icon'/>
                        <span>LogOut</span>
                    </li>
                </ul>
            </div>
            <div className='bottom'>
                <div className='colorOption'></div>
                <div className='colorOption'></div>
               
                
            </div>
        </div>
    )
}

export default Sidebar