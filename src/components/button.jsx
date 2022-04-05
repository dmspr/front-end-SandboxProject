import React from 'react'
import styled from 'styled-components'



function Button({ name }) {
    return (
        <ButtonStyled>
            {name}
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    background-color:var(--accent-pink);
    padding: .4rem 0.7rem;
    font-family: inherit;
    font-size: inherit;
    color:inherit;
    border-radius:15px;
    outline:none;
    border:none;
    cursor:pointer;

`

export default Button