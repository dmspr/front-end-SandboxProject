import React from "react";
import styled from "styled-components"
import bg from "../img/konser.jpg"
import LoginSidebar from "./loginSidebar";


export default function LoginPage() {
    return (
        <>
            <Body>
                <Wrapper>
                    <LoginSidebar />
                </Wrapper>
            </Body>
        </>
    )
}

const Body = styled.div`
    background:whitesmoke;
    position:absolute;
    top:0;
    right:0;
    left:0;
    bottom:0;
`
const Wrapper = styled.div`
    background-image:url(${bg});
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;
    width:100%;
    height:100%;
    display:flex;
`