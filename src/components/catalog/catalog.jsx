import React, { useEffect, useState } from "react";
import './catalog.scss'
import List from './list'
import axios from "axios";

export default function Catalog() {

    const [data, setData] = useState([])
    const getData = async () => {
        await axios.get('http://localhost:4000/list-event')
            .then((res) => {
                setData(res.data.results)
            })
            .catch((err) => console.log(err))
    }
    console.log(data)
    useEffect(() => {

        getData()
    }, [])
    return (
        <div className="container-catalog">
            <div className="wrapper">
                {data.map((list) => (<List list={list} key={list.id} />))}
            </div >
        </div>

    )


}
