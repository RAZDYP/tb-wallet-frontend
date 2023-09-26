
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
                        <div className='card w-75 p-4 border-0 rounded-5' style={{ backgroundColor: "#C2C0FF1F" }}>
                            <div className='card rounded-3 border-0'>
                                <div className='card-body'>
                                    <p>Subject : </p>
                                    <p>Email : rajdeep123@gmail.com</p>
                                    <p>Description : rajdeep123@gmail.com</p>
                                    <p>Attachements(if any)</p>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AdminSupportPage