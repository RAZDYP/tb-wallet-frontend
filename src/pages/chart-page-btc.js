import React from 'react'
import SideMenu from '../components/SideMenu'
import { useState, useEffect } from 'react'
import NavTopProfile from '../components/NavTopProfile'
import { BarChart } from '../components/BarChart'
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import CandlestickChart from '../components/CandlestickChart'
import LoadingComp from '../components/LoadingComp';

Chart.register(CategoryScale);

function BtcChartPage() {
    const [loading, setLoading] = useState(true)

    const [user, setUser] = useState({});
    const [currentRate, setCurrentRate] = useState(null)
    useEffect(() => {
        const token = localStorage.getItem('token')
        const email = localStorage.getItem('email')

        const getUser = async () => {
            setLoading(true)

            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/users/find?email=${email}`, {
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

        const handleCurrentAmount = async () => {
            const response = await fetch('https://rest.coinapi.io/v1/exchangerate/BTC/USD', {
                method: 'GET',
                headers: {
                    "X-CoinAPI-Key": "CBB9015C-0B0A-417F-90F9-8F87E358AB3D"
                }
            })

            const result = await response.json()
            console.log(result)
            setCurrentRate(result.rate)
        }

        handleCurrentAmount()
        setLoading(false)


        // setUser(result.user)
    }, [])

    const [bitcoinAddress, setBitcoinAddress] = useState('')
    const [amount, setAmount] = useState('')

    const handleSendBitcoin = async () => {
        setLoading(true)
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/wallet/debitBalance`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                bitAddress: bitcoinAddress,
                btcBalance: amount,
            })
        })

        const result = await response.json()
        console.log(result)
        setLoading(false)
        alert(result.message)
    }

    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    };

    return (
        <>
            {loading ? <LoadingComp /> : <div className=' col-md-12 d-flex'>
                <SideMenu page={"withdraw"} />
                <div style={{ height: "100vh", overflow: "scroll" }} className='col-md-9 font-style-verdana p-2'>
                    <NavTopProfile user={user} />
                    <div className='w-100 mt-5'>
                        <h3 className='w-100 text-center fw-bold font-style-verdana'>Bitcoin/USD</h3>
                    </div>
                    <div className='w-100 text-start mt-3 px-5'>
                        <p className='mb-1 opacity-50 small'>Available Balance</p>
                        <h4 className='fw-bold'>${currentRate ? currentRate.toFixed(2) : null}</h4>
                    </div>
                    <div className='w-100 px-5'>
                        <div className='card w-100 mt-4'>
                            <div className='card-body'>
                                <p>Chart body </p>
                                <BarChart chartData={data} />
                            </div>

                        </div>
                    </div>
                    <div className='w-100 px-5 d-flex align-items-center justify-content-center mt-4'>
                        <a href='/send-coin-btc' className='w-25'>
                            <button className='rounded-3 border-0 text-white col-md-12 me-3 p-2' style={{ backgroundColor: "#F80F0F" }}><small>SEND</small></button>
                        </a>
                        <a href='/receive-coin-btc' className='w-25'>
                            <button className='rounded-3 border-0 text-white col-md-12 ms-3 p-2' style={{ backgroundColor: "#53D39D" }}><small>RECEIVE</small></button>

                        </a>

                    </div>

                    <div className='w-100 d-flex justify-content-end mt-5 pe-4'>
                        <div className='text-center p-4 ' style={{ backgroundColor: "#C2C0FF", borderRadius: "40px" }}>
                            <h3 className='fw-bold px-2 m-0'>T</h3>
                        </div>
                    </div>
                </div>
            </div>}

        </>
    )
}
export default BtcChartPage