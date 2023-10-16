
import React, { useState, useEffect } from 'react'
import ProfileIcone from '../images/profile.png';
import bellIcon from '../images/Notification.png';
import NavTopProfile from './NavTopProfile';
import { useSearchParams } from 'react-router-dom';


import logo from '../images/main-logo.png';
import abstract from '../images/wepik-export-202309030832352E51-PhotoRoom 3.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import AdminSidePaNel from './AdminSidePanel';
import LoadingComp from '../components/LoadingComp';


function CardControlType() {
    const [loading, setLoading] = useState(false)

    const [searchParams] = useSearchParams()
    const [user, setUser] = useState({});
    const [userEmail, setUserEmail] = useState(null)

    const [card, setCard] = useState({})
    const [cardType, setCardType] = useState(null)
    const [cardStatus, setCardStatus] = useState(null)

    useEffect(() => {
        setLoading(true)
        const token = localStorage.getItem('token')
        const email = localStorage.getItem('email')
        const userEmail = searchParams.get('email')

        const getUser = async () => {
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
        setLoading(false)

        const handleGetCard = async () => {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/card/findByEmail?email=${userEmail}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })

            const result = await response.json()
            console.log(result)
            setCard(result)
            setCardType(result.cardType)
            setCardStatus(result.cardStatus)
        }

        handleGetCard()
        setLoading(false)
        // setUser(result.user)
    }, [])

    const handleActivateCard = async (cardType) => {
        setLoading(true)
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/card/updateCard`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: userEmail,
                cardType: cardType
            })
        })

        const result = await response.json()
        console.log(result)
        setLoading(false)
        window.location.reload()
    }

    const handleInactivateCard = async (cardType) => {
        setLoading(true)
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/card/updateCard/inactive`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: userEmail,
                cardType: cardType
            })
        })

        const result = await response.json()
        console.log(result)
        setLoading(false)
        window.location.reload()
    }

    const handleDisableCard = (card_type) => {
        if (card_type === cardType) {
            return false
        } else {
            if (cardStatus === "ACTIVE") {
                return true
            } else {
                return false
            }
        }

    }

    return (
        <>
            {loading ? <LoadingComp /> : <div className='d-flex '>
                <AdminSidePaNel />
                <div className='col-md-9 p-3 font-style-verdana'>
                    <NavTopProfile user={user} />
                    <div className='w-100 mt-3'>
                        <h3 className='w-100 text-center fw-bold font-style-verdana'>Card Control</h3>
                    </div>
                    <div className='w-100 mt-3 d-flex align-items-center justify-content-center'>
                        <div className='card w-75 py-3 border-0 rounded-5' style={{ backgroundColor: "#C2C0FF1F" }}>
                            <div className='card-body px-4 py-3' >
                                <p className='opacity-50 fw-semibold mb-4'>Card Type</p>
                                <div className='w-100 border p-2 rounded d-flex align-items-center justify-content-between mb-3'>
                                    <p className='m-0 opacity-75'>Classic</p>
                                    <div className=''>
                                        <button className='btn btn-success ' onClick={() => handleActivateCard("CLASSIC")} disabled={handleDisableCard("CLASSIC")}><small>ACTIVE</small></button>
                                        <button className='btn btn-secondary ms-2' disabled={handleDisableCard("CLASSIC")}><small>PENDING</small></button>
                                        <button className='btn btn-danger ms-2' onClick={() => handleInactivateCard("CLASSIC")} disabled={handleDisableCard("CLASSIC")}><small>INACTIVE</small></button>
                                    </div>
                                </div>
                                <div className='w-100 border p-2 rounded d-flex align-items-center justify-content-between mb-3'>
                                    <p className='m-0 opacity-75'>Merchant</p>
                                    <div className=''>
                                        <button className='btn btn-success ' onClick={() => handleActivateCard("MERCHANT")} disabled={handleDisableCard("MERCHANT")}><small>ACTIVE</small></button>
                                        <button className='btn btn-secondary ms-2' disabled={handleDisableCard("MERCHANT")}><small>PENDING</small></button>
                                        <button className='btn btn-danger ms-2' onClick={() => handleInactivateCard("MERCHANT")} disabled={handleDisableCard("MERCHANT")}><small>INACTIVE</small></button>
                                    </div>
                                </div>
                                <div className='w-100 border p-2 rounded d-flex align-items-center justify-content-between mb-3'>
                                    <p className='m-0 opacity-75'>Silver</p>
                                    <div className=''>
                                        <button className='btn btn-success ' onClick={() => handleActivateCard("SILVER")} disabled={handleDisableCard("SILVER")}><small>ACTIVE</small></button>
                                        <button className='btn btn-secondary ms-2' disabled={handleDisableCard("SILVER")}><small>PENDING</small></button>
                                        <button className='btn btn-danger ms-2' onClick={() => handleInactivateCard("SILVER")} disabled={handleDisableCard("SILVER")}><small>INACTIVE</small></button>
                                    </div>
                                </div>
                                <div className='w-100 border p-2 rounded d-flex align-items-center justify-content-between mb-3'>
                                    <p className='m-0 opacity-75'>Gold</p>
                                    <div className=''>
                                        <button className='btn btn-success ' onClick={() => handleActivateCard("GOLD")} disabled={handleDisableCard("GOLD")}><small>ACTIVE</small></button>
                                        <button className='btn btn-secondary ms-2' disabled={handleDisableCard("GOLD")}><small>PENDING</small></button>
                                        <button className='btn btn-danger ms-2' onClick={() => handleInactivateCard("GOLD")} disabled={handleDisableCard("GOLD")}><small>INACTIVE</small></button>
                                    </div>
                                </div>
                                <div className='w-100 border p-2 rounded d-flex align-items-center justify-content-between mb-3'>
                                    <p className='m-0 opacity-75'>Platinum</p>
                                    <div className=''>
                                        <button className='btn btn-success ' onClick={() => handleActivateCard("PLATINUM")} disabled={handleDisableCard("PLATINUM")}><small>ACTIVE</small></button>
                                        <button className='btn btn-secondary ms-2' disabled={handleDisableCard("PLATINUM")}><small>PENDING</small></button>
                                        <button className='btn btn-danger ms-2' onClick={() => handleInactivateCard("PLATINUM")} disabled={handleDisableCard("PLATINUM")}><small>INACTIVE</small></button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>}

        </>
    )
}

export default CardControlType