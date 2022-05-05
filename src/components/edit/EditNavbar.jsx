import React from 'react'
import styled from 'styled-components'
import Profile from "../dashboardKonten/profile";
import logo from "../../img/logo.svg"

export default function NavbarEdit() {
    return (
        <Body>
            <div className="left-menu">
                <img src={logo} alt="" />

            </div>
            <div className="right-menu">

                <Profile />
            </div>
        </Body>


    )

}

const Body = styled.div`
    width: 100%;
    height: 100%;
    padding:0 75px;
    display:flex;
    flex-direction:row;
    border-bottom:solid 1px #ababab;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    
    
    .left-menu{
        padding-top:10px;
        width:50%;
        display:flex;
        align-items:flex-start;
        img{
            height:4rem;
            padding-bottom:0.5rem;
        }
    }
    p{
        font-weight:800;
    }

    .right-menu{
        padding-top:20px;
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
    
`
