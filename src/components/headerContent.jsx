import React from 'react'
import styled from 'styled-components'
import SecondButton from './secondButton'
import phone from '../img/phone.svg'
import band from '../img/band.png'

function HeaderContent() {
    return (
        <HeaderContentStyled >
            <div className="left-content">
                <div className="left-text-container">
                    <h1>Can Get Ticket Easily!</h1>
                    <p className="white">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam eius repellendus, adipisci fugit molestiae error atque amet fugiat doloribus voluptas.
                    </p>
                    <SecondButton name={'Register'} />
                </div>
            </div>
            <div className="right-content">
                <img width="90%" src={phone} alt="phone" />
                <img width="15%" src={band} alt="guitar" className='band' />
            </div>
        </HeaderContentStyled >
    )
}

const HeaderContentStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top: 8rem;

        .left-content {
            display:flex;
            align-items; center;
            padding-right: 2okrem;

            h1{
                font-size:3rem;
                font-weight:400;
            }

            .white {
                padding: 1.3rem 0;
                line-height:1.8rem;
            }
        }
        .right-content {
            position: relative;
            .band{
                position:absolute;
                top:20%;
                right:30%;
            }
        }


`

export default HeaderContent