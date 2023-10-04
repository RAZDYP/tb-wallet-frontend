
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




function DashboardSettingsPage() {

    const [user, setUser] = useState({});
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
        // setUser(result.user)
    }, [])

    return (
        <>
            <div className='d-flex'>
                <SideMenu page={"settings"} />

                <div className='col-md-9 p-3 font-style-verdana' style={{ height: "100vh", overflowY: "scroll" }}>
                    <NavTopProfile user={user} />
                    <div className='w-100 mt-3'>
                        <h3 className='w-100 text-center fw-bold font-style-verdana'>Submit a request</h3>
                    </div>
                    <div className='w-100 mt-3 d-flex align-items-center justify-content-center'>
                        <h4>Terms and Conditions</h4>
                    </div>
                    <div className='w-100 p-5'>
                        <div className='text-start card border-0 shadow' >
                            <div className='card-body'>
                                <p><b>1.</b>
                                    Lorem ipsum dolor sit amet c onsectetur adipiscing elit. Donec vitae nibh ut libero     venenatis faucibus. Nullam quis ante eget metus efficitur ul
                                </p>
                                <p><b>2.</b>
                                    Lorem ipsum dolor sit amet c onsectetur adipiscing elit. Donec vitae nibh ut libero     venenatis faucibus. Nullam quis ante eget metus efficitur ul
                                </p>
                                <p><b>3.</b>
                                    Lorem ipsum dolor sit amet c onsectetur adipiscing elit. Donec vitae nibh ut libero     venenatis faucibus. Nullam quis ante eget metus efficitur ul
                                </p>
                                <p><b>4.</b>
                                    Lorem ipsum dolor sit amet c onsectetur adipiscing elit. Donec vitae nibh ut libero     venenatis faucibus. Nullam quis ante eget metus efficitur ul
                                </p>
                                <p><b>5.</b>
                                    Lorem ipsum dolor sit amet c onsectetur adipiscing elit. Donec vitae nibh ut libero     venenatis faucibus. Nullam quis ante eget metus efficitur ul
                                    Lorem ipsum dolor sit amet c onsectetur adipiscing elit. Donec vitae nibh ut libero     venenatis faucibus. Nullam quis ante eget metus efficitur ul
                                </p>
                                <p><b>6.</b>
                                    Lorem ipsum dolor sit amet c onsectetur adipiscing elit. Donec vitae nibh ut libero     venenatis faucibus. Nullam quis ante eget metus efficitur ul
                                    Lorem ipsum dolor sit amet c onsectetur adipiscing elit. Donec vitae nibh ut libero     venenatis faucibus. Nullam quis ante eget metus efficitur ul
                                </p>
                                <p><b>7.</b>
                                    Lorem ipsum dolor sit amet c onsectetur adipiscing elit. Donec vitae nibh ut libero     venenatis faucibus. Nullam quis ante eget metus efficitur ul
                                    Lorem ipsum dolor sit amet c onsectetur adipiscing elit. Donec vitae nibh ut libero     venenatis faucibus. Nullam quis ante eget metus efficitur ul
                                </p>
                                <p><b>8.</b>
                                    Lorem ipsum dolor sit amet c onsectetur adipiscing elit. Donec vitae nibh ut libero     venenatis faucibus. Nullam quis ante eget metus efficitur ul
                                    Lorem ipsum dolor sit amet c onsectetur adipiscing elit. Donec vitae nibh ut libero     venenatis faucibus. Nullam quis ante eget metus efficitur ul
                                </p>
                                <p><b>9.</b>
                                    Lorem ipsum dolor sit amet c onsectetur adipiscing elit. Donec vitae nibh ut libero     venenatis faucibus. Nullam quis ante eget metus efficitur ul
                                    Lorem ipsum dolor sit amet c onsectetur adipiscing elit. Donec vitae nibh ut libero     venenatis faucibus. Nullam quis ante eget metus efficitur ul
                                </p>
                                <p><b>10.</b>
                                    Lorem ipsum dolor sit amet c onsectetur adipiscing elit. Donec vitae nibh ut libero     venenatis faucibus. Nullam quis ante eget metus efficitur ul
                                    Lorem ipsum dolor sit amet c onsectetur adipiscing elit. Donec vitae nibh ut libero     venenatis faucibus. Nullam quis ante eget metus efficitur ul
                                </p>
                            </div>


                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default DashboardSettingsPage