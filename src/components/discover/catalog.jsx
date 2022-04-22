import React, { useEffect, useState } from "react";
import './catalog.scss'
import axios from "axios";
import ListDiscover from "./list";

export default function CatalogDiscover() {

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
                {data.map((list) => (<ListDiscover list={list} key={list.id} />))}
            </div >
        </div>

    )


}
