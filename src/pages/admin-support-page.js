
import React from 'react'
import ProfileIcone from '../images/profile.png';
import bellIcon from '../images/Notification.png';


import logo from '../images/main-logo.png';
import abstract from '../images/wepik-export-202309030832352E51-PhotoRoom 3.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import SideMenu from '../components/SideMenu';
import NavTopProfile from '../components/NavTopProfile';
import { useState, useEffect } from 'react';
import AdminSidePaNel from '../components/AdminSidePanel';




function AdminSupportPage() {

    const [user, setUser] = useState({});
    const [supports, setSupports] = useState([])
    useEffect(() => {
        const token = localStorage.getItem('token')
        const email = localStorage.getItem('email')

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

        const getSupportRequest = async () => {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/request/findSupport`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })

            const result = await response.json()
            console.log(result)
            setSupports(result)
            // setUser(result.user)
        }

        getSupportRequest()
        // setUser(result.user)
    }, [])

    return (
        <>
            <div className='d-flex'>
                <AdminSidePaNel page={"admin-support"} />

                <div className='col-md-9 p-3 font-style-verdana'>
                    <NavTopProfile user={user} />
                    <div className='w-100 mt-3'>
                        <h3 className='w-100 text-center fw-bold font-style-verdana'>Requests Received</h3>
                    </div>
                    <div className='w-100 mt-3 d-flex align-items-center justify-content-center'>
                        <div className='card w-75 p-4 border-0 rounded-5' style={{ backgroundColor: "#C2C0FF1F", height: "80vh", overflowY: "scroll" }}>
                            {
                                supports.map((support, index) => {
                                    return (
                                        <div className='card rounded-3 border-0'>
                                            <div className='card-body'>
                                                <p>Subject : {support.subject}</p>
                                                <p>Email : {support.email}</p>
                                                <p>Description : {support.description}</p>
                                                <p>Attachements(if any)</p>
                                            </div>

                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AdminSupportPage