import React from "react";
import { toast } from 'react-toastify'
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
        toast.success('Logout Succesfully', {
            position: "top-center",
            autoClose: 1500,
        })
        setTimeout(function () { window.location = '/login' }, 1500)

    }
    return (

        <div className="dropdown">
            <CgProfile size="25px" className="profile" />
            <div className="dropdown-content">
                <a href="/profile"><BsFillPersonFill /><span style={{ margin: '5px' }}>Edit Profile</span></a>
                <a href="/setting"><AiOutlineSetting /><span style={{ margin: '5px' }}>Setting</span></a>
                <a onClick={() => handleLogout()}><HiOutlineLogout
                /><span style={{ margin: '5px' }}>Log Out</span></a>
            </div>
        </div>
    )
}