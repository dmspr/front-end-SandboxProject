import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './breadcrumbs.scss'


export default function Breadcrumb() {
    const params = useParams()
    const [data, setData] = useState([])

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

    return (
        <ul style={{color:'black'}} className='breadcrumbs'>
            <li className='breadcrumbs__item'>
                <a href='/' className='breadcrumbs__link'>Home</a>
            </li>
            <li className='breadcrumbs__item'>
                <a href='/discover' className='breadcrumbs__link'>Discover</a>
            </li>
            <li className='breadcrumbs__item'>
                <a href='' className='breadcrumbs__link breadcrumbs__link--active'>{data.nameEvent}</a>
            </li>
        </ul>

    )
}