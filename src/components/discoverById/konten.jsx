import React, { useEffect, useState } from 'react'
import './kontenById.scss'
import axios from 'axios'
import poster from '../../img/poster.png'
import { useParams } from 'react-router-dom'
import { MdLocationPin } from "react-icons/md"
import { MdDateRange } from 'react-icons/md'
import LogoHere from '../../img/logo.png'
import Breadcrumb from './breadcrumbs'


export default function DiscoverKontenById() {
    const params = useParams()
    const [data, setData] = useState([])


    function formatDate(s) {
        var months = 'January February Maret April May June July August September October November December'.split(' ');
        var b = s.split(/\D/);
        return b[2] + ' ' + months[b[1] - 1] + ' ' + b[0];
    }
    const thousandSeparator = num => String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1.')

    const getData = async () => {
        await axios.get(`http://localhost:4000/list-event/${params.id}`)
            .then((res) => {
                setData(res.data.results[0])
                console.log(res.data.results[0])
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getData()
    }, [])

    console.log(data)

    return (

        <div className='container-byId'>
            <div className="breadcrumb">
                <Breadcrumb />
            </div>
            <div className="mid">
                <div className="left">
                    <img src={poster} alt="poster" />
                </div>
                <div className="right">
                    <h2>{data.nameEvent}</h2>
                    <div className='divlocation' style={{ display: 'flex' }}>
                        <MdLocationPin style={{ color: "blue" }} />
                        <p className="location">{data.location}</p>
                    </div>
                    <div className='divdate' style={{ display: 'flex' }}>
                        <MdDateRange style={{ color: "blue" }} />
                        <p className="date">{formatDate(`${data.date}`)}</p>
                    </div>

                    <hr style={{ color: 'grey', marginLeft: '20px', marginRight: '20px', marginTop: "100px" }} />
                    <p className='organizedby'>Diselengarakan Oleh:</p>
                    <span><img style={{ margin: '0', width: "35px", height: "35px", borderRadius: '50%' }} src={LogoHere} alt="logo" />
                        <h5>{data.organized}</h5>
                    </span>
                </div>
            </div>
            <div className="bottom">

                <div className="bottom-left">
                    <h4 >DESKRIPSI</h4>
                    <div className='hr'><hr /></div>
                    <p>
                        {data.description}
                    </p>
                </div>
                <div className="bottom-right">
                    <h3 className='h3price'>Harga Tiket</h3>
                    <p className='pprice'>Rp {thousandSeparator(`${data.price}`)}</p>
                    <h5 className='h5ticket'>Jumlah Tiket Yang Tersedia</h5>
                    <p className='pticket'>{data.ticket}</p>
                    <hr />
                    <button>Beli Tiket</button>
                </div>


            </div>
        </div>
    )


}