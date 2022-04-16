import React, { useState } from 'react'
import Sidemenu from '../components/Dashboard/sidemenu'
import Kontendashboard from '../components/dashboardKonten/dashboardKonten'
import './dashboard.css'

export default function Dashboard() {

    const [inactive, setInactive] = useState(false)

    return (
        <>
            <Sidemenu onCollapse={(inactive) =>
                setInactive(inactive)} />
            <div className={`container ${inactive ? 'inactive' : ''}`}>
                <Kontendashboard />
            </div>



        </>
    )
}

