import React from 'react'
import SideMenu from '../components/SideMenu'
import { useState, useEffect } from 'react'
import NavTopProfile from '../components/NavTopProfile'


function BtcChartPage() {

    const [user, setUser] = useState({});
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
        // setUser(result.user)
    }, [])

    const [bitcoinAddress, setBitcoinAddress] = useState('')
    const [amount, setAmount] = useState('')

    const handleSendBitcoin = async () => {
        const response = await fetch(`http://127.0.0.1:3000/api/wallet/debitBalance`, {
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
        alert(result.message)
    }

    return (
        <>
            <div className=' col-md-12 d-flex'>
                <SideMenu />
                <div style={{ height: "100vh", overflow: "scroll" }} className='col-md-9 font-style-verdana p-2'>
                    <NavTopProfile user={user} />
                    <div className='w-100 mt-5'>
                        <h3 className='w-100 text-center fw-bold font-style-verdana'>Bitcoin/USD</h3>
                    </div>
                    <div className='w-100 text-start mt-3 px-5'>
                        <p className='mb-1 opacity-50 small'>Available Balance</p>
                        <h4 className='fw-bold'>$5,643.50</h4>
                    </div>
                    <div className='w-100 px-5'>
                        <div className='card w-100 mt-4'>
                            <div className='card-body'>
                                <p>Chart body </p>

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
            </div>
        </>
    )
}
export default BtcChartPage