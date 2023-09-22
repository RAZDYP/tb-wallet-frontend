import React, { useState, useEffect } from 'react'
import SideMenu from '../components/SideMenu'
import SendCoin from '../components/SendCoin'


function SendCoinPage() {

    const [user, setUser] = useState({});

    useEffect(() => {
        const token = localStorage.getItem('token')
        const email = localStorage.getItem('email')
        const getUser = async () => {
            const response = await fetch(`http://127.0.0.1:3000/api/users/find`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            })

            const result = await response.json()
            console.log(result)
            // setUser(result.user)

        }

        getUser()
        // setUser(result.user)
    }, [])

    const cointypeList = [
        { id: 1, name: 'BTC' },
        { id: 2, name: 'ETH' },
    ]

    return (
        <div className='col-md-12 d-flex'>
            <SideMenu />
            <SendCoin user={user} />
        </div>
    )
}

export default SendCoinPage