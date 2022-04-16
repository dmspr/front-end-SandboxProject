import React from "react";
import { CgProfile } from 'react-icons/cg'
import {
    HiOutlineLogout
} from 'react-icons/hi'
import { AiOutlineSetting } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import './profile.scss'


export default function Profile() {
    const handleLogout = () => {
        localStorage.removeItem('access_token')
        window.location = '/'
    }
    return (

        <div class="dropdown">
            <CgProfile size="25px" className="profile" />
            <div className="dropdown-content">
                <a href="/profile"><BsFillPersonFill /><span style={{ margin: '5px' }}>Edit Profile</span></a>
                <a href="/setting"><AiOutlineSetting /><span style={{ margin: '5px' }}>Setting</span></a>
                <a href='/' onClick={() => handleLogout()}><HiOutlineLogout
                /><span style={{ margin: '5px' }}>Log Out</span></a>
            </div>
        </div>
    )
}