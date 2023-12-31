import React from 'react'
import ProfileIcone from '../images/profile.png';
import bellIcon from '../images/Notification.png';
import NavTopProfile from './NavTopProfile';


import logo from '../images/main-logo.png';
import abstract from '../images/wepik-export-202309030832352E51-PhotoRoom 3.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import AdminSidePaNel from './AdminSidePanel';
import { useState, useEffect } from 'react';
import LoadingComp from '../components/LoadingComp';




function CardControl() {

    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({});
    const [userEmail, setUserEmail] = useState(null)
    useEffect(() => {
        setLoading(true)
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
        setLoading(false)
        // setUser(result.user)
    }, [])

    const handleGetCard = async () => {
        setLoading(true)
        window.location.href = `/card-control/cards?email=${userEmail}`
        setLoading(false)
    }

    return (
        <>
            {loading ? <LoadingComp /> : <div className='d-flex justify-content-center'>
                <AdminSidePaNel page={"card-control"} />
                <div className='col-md-9 p-3 font-style-verdana' style={{ overflowY: "scroll", height: "100vh" }}>
                    <NavTopProfile user={user} />
                    <div className='w-100 mt-5'>
                        <h3 className='w-100 text-center fw-bold font-style-verdana'>Card Control</h3>
                    </div>
                    <div className='w-100 mt-5 d-flex align-items-center justify-content-center'>
                        <div className='card w-50 py-5 border-0 rounded-5' style={{ backgroundColor: "#C2C0FF1F" }}>
                            <div className='card-body px-4 py-4' >
                                <p className='opacity-50 mb-5'>Enter Email Address:</p>
                                <Box sx={{ mt: 3, width: "100%" }}>
                                    <Grid container spacing={2}>

                                        <Grid item xs={12} sm={12}>
                                            <TextField label="Email" fullWidth name="" required focused
                                                onChange={(e) => setUserEmail(e.target.value)}
                                                value={userEmail}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12}>
                                            <button className='w-100 p-3 rounded-3 border-0 mt-3' style={{ color: "white", backgroundColor: "#F80F0F" }}
                                                onClick={handleGetCard}
                                            >{loading ? "SEARCHING" : "SEARCH"}</button>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </div>
                        </div>
                    </div>

                </div>
            </div>}

        </>
    )
}

export default CardControl