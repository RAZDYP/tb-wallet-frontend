import React from 'react'
import SideMenu from '../components/SideMenu';
import ReceiveCoin from '../components/ReceiveCoin';
import { useState, useEffect } from 'react';

function ReceiveCoinEth() {
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
    const cointypeList = [
        {
            id: 1,
            name: 'BTC',
            imageSrcQR: 'https://www.trustedbitcoinwallet.com/wp-content/uploads/2021/07/btc.png',
            Address: 'bc1w1KoPbwJ2hB03HEy73rWOZI6QeDSWhwy3Mp7o0'
        },
        {
            id: 2,
            name: 'ETH',
            imageSrcQR: 'https://www.trustedbitcoinwallet.com/wp-content/uploads/2021/07/eth.png',
            Address: '0xJ96TSYO8itBFOl3x4cPBVGuGubaWnLxlqVgnDuq'
        }
    ]

    return (
        <>
            <div className=' col-md-12 d-flex'>
                <SideMenu />
                <ReceiveCoin user={user} cointypeList={cointypeList[1]} />
            </div>
        </>
    )
}

export default ReceiveCoinEth