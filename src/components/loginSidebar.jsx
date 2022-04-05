import React from 'react'
import styled from 'styled-components'
import logo from '../img/logo.svg'
import FormLogin from '../pages/Auth/formLogin'

export default function LoginSidebar() {
    return (
        <Container>
            <LogoWrapper>
                <img src={logo} alt="" />
                <h3>
                    our <span>tickets</span>
                </h3>
            </LogoWrapper>
            <FormLogin />
        </Container>

    )
}

const Container = styled.div`
    min-width:450px;
    backdrop-filter: blur(35px);
    background-color: rgba(255,255,255,0.8)
    height:100%;
    display: flex;
    align-items:center;
    flex-direction:column;
    justify-content:space-evenly;
    padding:0 2rem;
`
const LogoWrapper = styled.div`
img{
    height:6rem
}
h3{
    text-align:center;
    color: #ff8d8d;
    font-size:22px
}
span {
    color:white;
    font-weight:300;
    font-size:20px
}

`