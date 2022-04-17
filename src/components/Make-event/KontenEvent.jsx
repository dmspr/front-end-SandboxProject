import React, { useEffect, useState } from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";
import styled from 'styled-components'
import axios from 'axios'
import poster from '../../img/poster.png'

export default function KontenEvent() {
    const [nameEvent, setNameevent] = useState("")
    const [date, setDate] = useState(new Date())
    const [katagori, setKatagori] = useState("")
    const [location, setLocation] = useState("")
    const [price, setPrice] = useState(0)
    const [ticket, setTicket] = useState(0)
    const [description, setDescription] = useState("")


    const createData = async () => {
        await axios.post('http://localhost:8080/products', {
            nameEvent,
            date,
            katagori,
            location,
            price,
            ticket,
            description
        })
        .then(() => {
            setTimeout(function () { window.location = '/dashboard' }, 1500)
        })
        .catch((err) => console.log(err))
    }

    console.log(nameEvent)
    console.log(description)

    return (

        <Container>
            <img src={poster} alt="poster" />
            <form>
                <FormGroup>
                    <div className="top-section">
                        <Label>
                            <h2>Nama Event</h2>
                        </Label>
                        <Input className="namaevent" onChange={(e) => setNameevent(e.target.value)} placeholder="Nama Event"></Input>
                    </div>
                    <div className="mid-section">
                        <div className="left">
                            <Label>
                                <h5>Kategori</h5>
                            </Label>
                            <select className="option" onChange={(e) => setKatagori(e.target.value)}>
                                <option>Konser</option>
                                <option>Pertandingan</option>
                                <option>Seminar</option>
                                <option>Workshop</option>
                            </select>
                        </div>
                        <div className="middle">
                            <Label>
                                <h5>Lokasi</h5>
                            </Label>
                            <Input className="location" placeholder="location" onChange={(e) => setLocation(e.target.value)}
                            ></Input>
                            <Label>
                                <h5>Date</h5>
                            </Label>
                            <Input type="date" className="date"
                                onChange={(e) => setDate(e.target.value)}></Input>
                        </div>
                        <div className="right">
                            <Label>
                                <h5>Harga</h5>
                            </Label>
                            <Input className="price" placeholder="price" onChange={(e) => setPrice(e.target.value)}></Input>
                            <Label>
                                <h5>Jumlah Tiket</h5>
                            </Label>
                            <Input className="tiket" placeholder="Jumlah Tiket" onChange={(e) => setTicket(e.target.value)}></Input>
                        </div>
                    </div>
                    <div className="bottom">
                        <Label>
                            <h5>Deskripsi Event</h5>
                        </Label>
                        <textarea className="desc" placeholder="deskripsi" onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>

                </FormGroup>
                <Button type="submit" onClick={createData}>Submit</Button>
            </form>
        </Container >
    )
}


const Container = styled.div`
    // padding:20px;
    margin:50px 200px;
    border-radius:10px;
    border:solid 1px #ababab;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    display:flex;
    flex-direction: column;
    justify-content:center;

    img{
        height:450px;
        width:100%;
        border-radius:10px;
    }
    
    h5{
        color:black;
    }
    
    .top-section{
        padding:20px;
        display: flex;
        flex-direction: column;

        h2{
            color: black;
            padding-bottom:5px;
        }

        .namaevent{
            margin-bottom:20px;
            font-family: inherit;
            width: 100%;
            border: 0;
            border-bottom: 1px solid #ababab;
            outline: 0;
            font-size: 1rem;
            color: black
            padding: 7px 0;
            background: transparent;
            &::placeholder {
                // color: transparent;
            }
            
            &:placeholder-shown ~ .form__label {
                font-size: 1.3rem;
                cursor: text;
                top: 20px;
            }
        }
    }
    

    .mid-section{
        padding:0 20px;
        display:flex;
        flex-direction:row;
        
        .left {
            display:flex;
            flex-direction: column;
            width:33%;

        }

        .middle{
            display:flex;
            flex-direction: column;
            width:33%;

        }

        .right{
            display:flex;
            flex-direction: column;
            width:34%;

        }
    }

    .bottom{
        padding:0 20px;
        display:flex;
        width:100%;
        flex-direction: column;
    }

`