import React from "react";
import styled from 'styled-components'
import Button from "../button";
import logo from "../../img/logo.svg"
import KontenDiscover from "./kontenDiscover";

export default function NavbarDiscover() {

    return (
        <>
            <NavigationStyled>
                <div className="logo">
                    <img src={logo} alt='logo' />
                </div>
                <ul>
                    <li>
                        <a href="/discover">Search</a>
                    </li>
                    <li>
                        <a href="/make-event">Buat Event</a>
                    </li>
                </ul>
                <a href="/login"><Button name={'Sign Up'} />
                </a>
            </NavigationStyled>
            <KontenDiscover />
        </>
    )
}

export const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    min-height:10vh;
    align-items: center;
    border-bottom:solid 1px #ababab;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    padding:0 75px;
    .logo{
        padding-top:10px;
        width:50%;
        display:flex;
        align-items:flex-start;
        img{
            height:4rem;
            padding-bottom:0.5rem;
        }
    }

    ul{
        display:flex;
        justify-content: space-between;
        width:20%;
        color:black;
    }



`
