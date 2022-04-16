import React from "react";
import styled from "styled-components"
import Sidemenu from "./sidemenu";



export default function SidemenuPage() {
    return (
        <>
            <Body>
                <Wrapper>
                    <Sidemenu />
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
    width:100%;
    height:100%;
    display:flex;
`