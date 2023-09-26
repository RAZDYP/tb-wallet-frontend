
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

function CardControlType() {

    const [searchParams] = useSearchParams()
    const [user, setUser] = useState({});
    const [userEmail, setUserEmail] = useState(null)

    const [card, setCard] = useState({})

    useEffect(() => {
        const token = localStorage.getItem('token')
        const email = localStorage.getItem('email')
        const userEmail = searchParams.get('email')

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

        const handleGetCard = async () => {
            const response = await fetch(`http://127.0.0.1:3000/api/card/findByEmail?email=${userEmail}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })

            const result = await response.json()
            console.log(result)
            setCard(result)
        }

        handleGetCard()
        // setUser(result.user)
    }, [])
    return (
        <>
            <div className='col-md-12 p-3 font-style-verdana'>
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
                                    <button className='btn btn-success '><small>ACTIVE</small></button>
                                    <button className='btn btn-secondary ms-2'><small>PENDING</small></button>
                                    <button className='btn btn-danger ms-2'><small>INACTIVE</small></button>
                                </div>
                            </div>
                            <div className='w-100 border p-2 rounded d-flex align-items-center justify-content-between mb-3'>
                                <p className='m-0 opacity-75'>Merchant</p>
                                <div className=''>
                                    <button className='btn btn-success '><small>ACTIVE</small></button>
                                    <button className='btn btn-secondary ms-2'><small>PENDING</small></button>
                                    <button className='btn btn-danger ms-2'><small>INACTIVE</small></button>
                                </div>
                            </div>
                            <div className='w-100 border p-2 rounded d-flex align-items-center justify-content-between mb-3'>
                                <p className='m-0 opacity-75'>Silver</p>
                                <div className=''>
                                    <button className='btn btn-success '><small>ACTIVE</small></button>
                                    <button className='btn btn-secondary ms-2'><small>PENDING</small></button>
                                    <button className='btn btn-danger ms-2'><small>INACTIVE</small></button>
                                </div>
                            </div>
                            <div className='w-100 border p-2 rounded d-flex align-items-center justify-content-between mb-3'>
                                <p className='m-0 opacity-75'>Gold</p>
                                <div className=''>
                                    <button className='btn btn-success '><small>ACTIVE</small></button>
                                    <button className='btn btn-secondary ms-2'><small>PENDING</small></button>
                                    <button className='btn btn-danger ms-2'><small>INACTIVE</small></button>
                                </div>
                            </div>
                            <div className='w-100 border p-2 rounded d-flex align-items-center justify-content-between mb-3'>
                                <p className='m-0 opacity-75'>Platinum</p>
                                <div className=''>
                                    <button className='btn btn-success '><small>ACTIVE</small></button>
                                    <button className='btn btn-secondary ms-2'><small>PENDING</small></button>
                                    <button className='btn btn-danger ms-2'><small>INACTIVE</small></button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CardControlType