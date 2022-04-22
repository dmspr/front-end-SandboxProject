import React, { useState, useEffect } from 'react'
import logo from '../../img/logo.svg'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'
import { BsCalendarEvent } from 'react-icons/bs'
import profile from '../../img/profile.png'
import "./style.css"
// import { toast } from 'react-toastify'
import axios from 'axios'

export default function Sidemenu(props) {
    const [inactive, setInactive] = useState(false)
    const [data, setData] = useState([])

    const getData = async () => {
        await axios.get('http://localhost:4000/dashboard')
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getData()
    }, [])

    props.onCollapse(inactive)
    console.log(data)

    return (
        <div className={`side-menu ${inactive ? 'inactive' : ""}`}>
            <div className="top-section">
                <div className="logo">
                    <img src={logo} alt='logo' />
                </div>
                <div onClick={() => setInactive(!inactive)} className='toggle-menu-btn'>
                    {inactive ? <BsArrowRightSquareFill /> : <BsArrowLeftSquareFill />}
                </div>
            </div>
            <div className="divider">
            </div>
            <div className="main-menu">
                <ul>
                    <li>
                        <a className='menu-item' href='/dashboard'>
                            <div className="menu-icon" style={{borderBottom:'solid 1px'}}>
                                <BsCalendarEvent />
                            </div>
                            <span>Event Saya</span></a>
                    </li>
                </ul>
            </div>

            <div className="side-menu-footer">
                <div className='avatar'>
                    <img src={profile} alt="profile" />
                </div>

                {data.map((v) => (
                    <div className="user-info">
                        <h5>{v.name}</h5>
                        <p>{v.email}</p>

                    </div>
                ))}
            </div>
        </div>
    )
}
