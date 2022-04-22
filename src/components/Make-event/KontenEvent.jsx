import React, { useState } from "react";
import { FormGroup, Label, Button } from "reactstrap";
import styled from 'styled-components'
import axios from 'axios'
import poster from '../../img/poster.png'
import './style.scss'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function KontenEvent() {
    const [nameEvent, setNameevent] = useState("")
    const [date, setDate] = useState(new Date())
    const [katagori, setKatagori] = useState("")
    const [location, setLocation] = useState("")
    const [price, setPrice] = useState(0)
    const [ticket, setTicket] = useState(0)
    const [description, setDescription] = useState("")
    const [organized, setOrganized] = useState("")


    const createData = async () => {
        await axios.post('http://localhost:4000/make-event', {
            nameEvent,
            organized,
            date,
            katagori,
            location,
            price,
            ticket,
            description
        })
            .then(() => {
                toast.success(' Berhasil Membuat Event', {
                    position: "top-center",
                    autoClose: 1500,
                })
                setTimeout(function () { window.location = '/dashboard' }, 1500)
            })
            .catch(err => {
                if (err.response.status === 400)
                    toast.error('Login Failed', {
                        position: "top-center",
                        autoClose: 2000,
                    })
                // setHandlelogin('Login Failed, please check your email or password and try again.');


            })
    }

    // console.log(nameEvent)
    console.log(description)

    return (

        <div className="container-konten">
            <img src={poster} alt="poster" />
            {/* <input type="File"></input> */}
            <form>
                <FormGroup>
                    <div className="top-section">
                        <Label>
                            <h5>Nama Event</h5>
                        </Label>
                        <input className="namaevent" onChange={(e) => setNameevent(e.target.value)} placeholder="Nama Event"></input>

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
                            <Label>
                                <h5 className="organizedh5">Diselengarakan Oleh</h5>
                            </Label>
                            <input className="organized" placeholder="" onChange={(e) => setOrganized(e.target.value)}
                            ></input>
                        </div>
                        <div className="middle">
                            <Label>
                                <h5>Lokasi</h5>
                            </Label>
                            <input className="location" placeholder="Location" onChange={(e) => setLocation(e.target.value)}
                            ></input>
                            <Label>
                                <h5 className="dateh5">Date</h5>
                            </Label>
                            <input type="date" className="date"
                                onChange={(e) => setDate(e.target.value)}></input>
                        </div>
                        <div className="right">
                            <div className="currency-wrap">
                                <Label>
                                    <h5>Harga</h5>
                                </Label>
                                <span className="currency-code">Rp</span>
                                <input className="price" placeholder="Price/Free" onChange={(e) => setPrice(e.target.value)}></input>
                            </div>
                            <Label>
                                <h5 className="ticketh5">Jumlah Tiket</h5>
                            </Label>
                            <input min="1" required=" required" type='number' className="tiket" placeholder="Jumlah Tiket" onChange={(e) => setTicket(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="bottom">
                        <Label>
                            <h5>Deskripsi Event</h5>
                        </Label>
                        <textarea className="desc" placeholder="Deskripsi" onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>

                </FormGroup>
                <div className="submit-button">
                    <button className="create-data-button" type="submit" onClick={createData}>Submit</button>
                </div>
            </form>

        </div >
    )
}


const Container = styled.div`
    margin:50px 200px;
    border-radius:10px;
    border:solid 1px #ababab;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    display:flex;
    flex-direction: column;
    justify-content:center;

    .submit-button{
        display:flex;
        align-items:center;
        justify-content:center;
        margin:20px 20px;
        
        .create-data-button{
        width: 75%;
        max-width: 50px;
        min-width: 80px;
        height: 50px;
        width: 100px;
        border: none;
        margin: 1rem 0;
        box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        background-color: #13aa52;
        color: #fff;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease-in;
        }

        .create-data-button:hover {
            transform: translateY(-3px);
        }
        
    }


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
        position:relative; 

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
            font-size: 1.6rem;
            color: black
            padding: 7px 0;
            background: transparent;
            font-weight:800;
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
        position:relative; 

        .left {
            display:flex;
            flex-direction: column;
            width:33%;
            margin-right:15px;

        }

        .middle{
            display:flex;
            flex-direction: column;
            width:33%;
            margin-right:15px;
            .date{
                padding-bottom:8px;
            }


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
        position:relative; 
    }

    input {
        font-size:18px;
        padding:10px 10px 10px 0px;
        display:block;
        width:100%;
        border:none;
        border-bottom:1px solid #757575;
    }
    input:focus{ 
        outline:none; 
    }
    .price{
        padding:10px 10px 10px 25px;
    }

    textarea{
        font-size:18px;
        padding:10px 10px 10px 0px;
        display:block;
        width:100%;
        height:100px;
        border:none;
        border-bottom:1px solid #757575;

    }

    textarea:focus{ 
        outline:none; 
    }
    

    select{
        font-size:18px;
        padding:10px 10px 8px 5px;
        display:block;
        width:100%;
        border:none;
        border-bottom:1px solid #757575;

    }
    input:focus{ 
        outline:none; 
    }

    .currency-wrap{
        position:relative;
    }
    .currency-code{
        position:absolute;
        left:0px;
        top:30px;
        color:black;
    }
    .price{
    // padding:10px 20px;
    // border:solid 1px #ccc;
    // border-radius:5px;
    }

    @media (max-width: 1200px) {
        Container {
            margin:50px 100px;
        }
    }

`