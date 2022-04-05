import React from 'react'
import Header from '../components/header'
import { OuterLayout } from '../styles/layouts'


export default function Homepage() {
    return (
        <>
            <div className='App'>
                <Header />
                <OuterLayout>
                </OuterLayout>
            </div>
        </>
    );
}

