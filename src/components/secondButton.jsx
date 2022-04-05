import React from 'react'
import styled from 'styled-components'

function SecondButton({ name }) {
    return (
        <SecondButtonStyle>
            {name}
        </SecondButtonStyle>
    )
}

const SecondButtonStyle = styled.button`
    background-color:var(--dark-primary);
    padding: .4rem 0.7rem;
    font-family: inherit;
    font-size: inherit;
    color:inherit;
    border-radius:15px;
    outline:none;
    border:none;
    cursor:pointer;
`

export default SecondButton