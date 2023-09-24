import React, { useState, useEffect } from 'react'
import SideMenu from '../components/SideMenu';
import SendCoin from '../components/SendCoin';
import ProfileIcone from '../images/profile.png';
import bellIcon from '../images/Notification.png';
import Qrcode from '../images/qr-code.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCopy, faCircleInfo, faChartSimple } from '@fortawesome/free-solid-svg-icons'
import ReceiveCoin from '../components/ReceiveCoin';
import CircleIcon from '../images/circle-abstract.png';
import subtractIcon from '../images/Subtract.png';
import barchart from '../images/bar-chart.png';
import BarchartRed from '../images/BarChartRed.png';
import DashboardChart from '../components/DashboardChart';
import ActivateCard from '../components/ActivateCard';
function Dashboard() {

    const [user, setUser] = useState({});

    useEffect(() => {
        const email = localStorage.getItem('email')
        const firstName = localStorage.getItem('firstName')
        const lastName = localStorage.getItem('lastName')

        setUser({
            email,
            firstName,
            lastName
        })
    }, [])

    return (
        <>
            <div className=' col-md-12 d-flex'>
                <SideMenu />
                <DashboardChart user={user} />
            </div>
        </>
    )
}

export default Dashboard