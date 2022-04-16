import React from "react";
import styled from 'styled-components'
import Profile from "./profile";
import { Spinner } from 'reactstrap'


export default function Kontendashboard() {
    return (
        <><div>
            <Body>
                <div className="left-menu">
                    <h1>Event Saya</h1>

                </div>
                <div className="right-menu">
                    <button><a href="/make-event"><p>BUAT EVENT</p></a></button>
                    <Profile />
                </div>
            </Body>

            <div>
                <Spinner>
                    Loading...
                </Spinner>
            </div>
        </div>

        </>
    )

}

const Body = styled.div`
    width: 100%;
    height: 100%;
    margin-top:5px;
    padding-right:20px;
    display:flex;
    flex-direction:row;
    border-bottom:solid 1px black;
    
    .left-menu{
        width:50%;
        display:flex;
        align-items:flex-start;
    }
    p{
        font-weight:800;
    }

    .right-menu{
        width:50%;
        display:flex;
        justify-content: flex-end;
    }

    h1{
        color:black;
        font-size:24px;
        margin-bottom:18px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    button {
        margin-bottom: 15px;
        width: 20%;
        heigth: 5%;
        border:none;
        border-radius: 5px;
        cursor:pointer;
        text-align: center !important;
        background-color: #ff4e00; 
        background-image: linear-gradient(200deg, #ff4e00 0%, #ec9f05 74%);

        &:active, &:focus {
            box-shadow: none;
        }
    }
`