import React from 'react'
import { useState, useEffect } from 'react'
import AdminSidePaNel from '../components/AdminSidePanel'
import UserDetails from '../components/UserDetails'
import UserDetailsResults from '../components/UserDetailsResult'
import BalanceControl from '../components/BalanceControl'
import BalanceControlCrDr from '../components/BalanceControlCrDr'
import CardControl from '../components/CardControl'
import CardControlType from '../components/CardControlType'
import AdminSingleUserRegister from '../components/AdminSingleUserRegister'
import AdminUpdateQR from '../components/AdminUpdateQR'
import ActivateCardPayment from '../components/ActivateCardPayment'


function AdminPanel() {

    const [user, setUser] = useState({});

    useEffect(() => {
        const token = localStorage.getItem('token')
        const email = localStorage.getItem('email')
        const getUser = async () => {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/users/find`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            })

            const result = await response.json()
            console.log(result)
            setUser(result.user)

        }

        getUser()
        // setUser(result.user)
    }, [])

    return (
        <div className=' col-md-12 d-flex'>
            <AdminSidePaNel />
            <div style={{ height: "100vh", overflow: "scroll" }} className='col-md-9'>
                <UserDetailsResults />
                {/* <CardControl /> */}
                {/* <CardControlType /> */}
                {/* <AdminSingleUserRegister /> */}
                {/* <AdminUpdateQR /> */}
                {/* <ActivateCardPayment /> */}
            </div>
        </div>
    )
}

export default AdminPanel