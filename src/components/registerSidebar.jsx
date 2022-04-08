import React from 'react'
import styled from 'styled-components'
import logo from '../img/logo.svg'
import FormRegister from '../pages/Auth/formRegister'

export default function RegisterSidebar() {
    return (
        <Container>
            <LogoWrapper>
                <img src={logo} alt="" />
                <h2>
                    our <span>tickets</span>
                </h2>
            </LogoWrapper>
            <FormRegister />
            <Terms>
                by signing up, i agree to the Privacy Policy <br /> and Terms of Service
            </Terms>
            <h4>
                have an account? <a href='/login' color='blue'>Sign in</a>
            </h4>

        </Container>

    )
}

const Terms = styled.p`
    padding: 0 1rem;
    text-align:center;
    font-size:10px;
    color:#808080;
    font-weight:300;
`

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
    
    h4{
        color:black;
        font-weight:bold;
        font-size:13px;

        a{
            color: #fcd051;
        }
    }

    @media (max-width: 900px) {
        width:100vh;
        padding:0;
    }
`
const LogoWrapper = styled.div`
    img{
        height:5.5rem;
        padding-left:0.5rem;
    }
    h2{
        text-align:center;
        color:#ff8d8d;
        font-size:22px;
    }

    span{
        color:whitesmoke;
        font-size:22px;
    }
    
`