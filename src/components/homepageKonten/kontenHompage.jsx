import React from 'react'
import CatalogDiscover from '../discover/catalogDiscover'
import './kontenHomepage.scss'

export default function KontenhHompage() {

    return (
        <>
            <div className='Event-rec'>
                <h3>Event Recomendation</h3>
            </div>
            <div className='Konten-rec'>
                <CatalogDiscover/>
            </div>
        </>
    )

}