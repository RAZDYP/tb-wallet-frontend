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
    const [currentRateBtc, setCurrentRateBtc] = useState(null)
    const [currentRateEth, setCurrentRateEth] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem('token')
        const email = localStorage.getItem('email')

        const getUser = async () => {
            const response = await fetch(`http://127.0.0.1:3000/api/users/find?email=${email}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })

            const result = await response.json()
            console.log(result)
            setUser(result.user)
        }

        getUser()

        const handleCurrentAmountBtc = async () => {
            const response = await fetch('https://rest.coinapi.io/v1/exchangerate/BTC/USD', {
                method: 'GET',
                headers: {
                    "X-CoinAPI-Key": "CBB9015C-0B0A-417F-90F9-8F87E358AB3D"
                }
            })

            const result = await response.json()
            console.log(result)
            setCurrentRateBtc(result.rate)
        }

        handleCurrentAmountBtc()

        const handleCurrentAmountEth = async () => {
            const response = await fetch('https://rest.coinapi.io/v1/exchangerate/ETH/USD', {
                method: 'GET',
                headers: {
                    "X-CoinAPI-Key": "CBB9015C-0B0A-417F-90F9-8F87E358AB3D"
                }
            })

            const result = await response.json()
            console.log(result)
            setCurrentRateEth(result.rate)
        }

        setTimeout(() => {
            handleCurrentAmountEth()
        }, 1000)
        // setUser(result.user)
    }, [])

    return (
        <>
            <div className=' col-md-12 d-flex'>
                <SideMenu page={"dashboard"} />
                <DashboardChart user={user} currentRateBtc={currentRateBtc} currentRateEth={currentRateEth} />
            </div>
        </>
    )
}

export default Dashboard