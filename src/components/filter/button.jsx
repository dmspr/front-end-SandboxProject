import React from 'react'


export default function ButtonFilter(filter) {
    return (
        <div>
            <button type='button' onClick={()=>filter('Konser')}>Konser</button>
        </div>
    )
}