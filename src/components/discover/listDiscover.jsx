import React from "react";
import Logo from '../../img/poster.png'
import './listDiscover.scss'
import 'react-toastify/dist/ReactToastify.css'
import { MdLocationPin } from "react-icons/md"
import { MdDateRange } from 'react-icons/md'
import LogoHere from '../../img/logo.png'
import { Link } from 'react-router-dom'


// import FormDashboard from './form'

export default function ListDiscover({ list }) {



    function formatDate(s) {
        var months = 'January February Maret April May June July August September October November December'.split(' ');
        var b = s.split(/\D/);
        return b[2] + ' ' + months[b[1] - 1] + ' ' + b[0];
    }

    const thousandSeparator = num => String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,')

    return (
        <Link target="_blank" to={`/discover/${list.id}`}>
            <div className='blogItem-wraps'>
                <img src={Logo} alt='test' />
                <p className="katagori">{list.katagori}</p>
                <h3>{list.nameEvent}</h3>

                <div className="mid">
                    <div className="left">
                        <div style={{ display: 'flex' }}>
                            <MdLocationPin />
                            <p className="location">{list.location}</p>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <MdDateRange />
                            <p className="date">{formatDate(`${list.date}`)}</p>
                        </div>
                    </div>
                    <div className="right">
                        <p>Rp.{thousandSeparator(`${list.price}`)}</p>
                    </div>
                </div>
                <hr style={{ margin: "10px", height: '1px', color: 'grey' }} />
                <div style={{ padding: "0" }}>
                    <span><img style={{ margin: '0', width: "35px", height: "35px", borderRadius: '50%' }} src={LogoHere} alt="logo" />
                        <h5>{list.organized}</h5>
                    </span>
                </div>
            </div>
        </Link>
    )
}