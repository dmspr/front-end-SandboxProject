import React, { useState } from "react";
import Logo from '../../img/poster.png'
import './list.scss'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { MdLocationPin } from "react-icons/md"
import { MdDateRange } from 'react-icons/md'
import LogoHere from '../../img/logo.png'

// import FormDashboard from './form'

export default function ListDiscover({ list }) {

    const [data, setData] = useState([])

    function formatDate(s) {
        var months = 'January February Maret April May June July August September October November December'.split(' ');
        var b = s.split(/\D/);
        return b[2] + ' ' + months[b[1] - 1] + ' ' + b[0];
    }
    return (
        <div className='blogItem-wrap'>
            <img src={Logo} alt='test' />
            <p className="katagori">{list.katagori}</p>
            <h3>{list.nameEvent}</h3>

            <div>
                <div style={{ display: 'flex' }}>
                    <MdLocationPin />
                    <p className="location">{list.location}</p>
                </div>
                <div style={{ display: 'flex' }}>
                    <MdDateRange />
                    <p className="date">{formatDate(`${list.date}`)}</p>
                </div>
            </div>
            <hr style={{ margin: "10px" }} />
            <footer>
                <span><img style={{ margin: '0', width: "35px", height: "35px", borderRadius: '50%' }} src={LogoHere} alt="logo" />
                    <h5>{list.organized}</h5>
                </span>
            </footer>
        </div>
    )
}