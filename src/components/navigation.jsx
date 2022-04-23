import React from "react";
import styled from 'styled-components'
import Button from "./button";
import logo from "../img/logo.svg"

export default function Navigation() {

    return (
        <NavigationStyled>
            <div className="logo">
                <img width="50px" src={logo} alt='logo' />
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
    )
}

export const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    min-height:10vh;
    align-items: center;
    ul{
        display:flex;
        justify-content: space-between;
        width:20%;
    }
`