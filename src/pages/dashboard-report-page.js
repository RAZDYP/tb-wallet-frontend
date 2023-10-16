
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




function ReportPage() {
    const [loading, setLoading] = useState(false)

    const [user, setUser] = useState({});

    const [subject, setSubject] = useState('')
    const [email, setEmail] = useState('')
    const [description, setDescription] = useState('')

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
            // console.log(result)
            setUser(result.user)
        }

        getUser()
        setLoading(false)
        // setUser(result.user)
    }, [])

    const handleCreateReport = async (e) => {
        e.preventDefault()
        setLoading(true)
        console.log(subject, email, description)
        const data = {
            subject,
            email,
            description
        }

        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/request/createReport`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const result = await response.json()
        console.log(result)
        setLoading(false)
        alert(result.requestType)

    }

    return (
        <>
            <div className='d-flex'>
                <SideMenu page={"dashboard-report"} />

                <div className='col-md-9 p-3 font-style-verdana'>
                    <NavTopProfile user={user} />
                    <div className='w-100 mt-3'>
                        <h3 className='w-100 text-center fw-bold font-style-verdana'>Submit a report</h3>
                    </div>
                    <div className='w-100 mt-3 d-flex align-items-center justify-content-center'>
                        <div className='card w-75 py-3 border-0 rounded-5' style={{ backgroundColor: "#C2C0FF1F" }}>
                            <div className='card-body px-4 py-3' >
                                <Box component="form" sx={{ mt: 2, width: "100%" }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={12}>
                                            <TextField label="Subject" fullWidth name="" required focused
                                                value={subject} onChange={(e) => setSubject(e.target.value)}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={12}>
                                            <TextField label="Your Email Address" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth name="" required focused />
                                        </Grid>

                                        <Grid item xs={12} sm={12}>
                                            <TextField label="Desciption" fullWidth name="" required focused
                                                value={description} onChange={(e) => setDescription(e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12}>
                                            <button className='w-100 p-2 rounded-3 border-0 mt-2' style={{ color: "white", backgroundColor: "#F80F0F" }}
                                                onClick={handleCreateReport}
                                            >{loading ? "Creating Report" : "SUBMIT"}</button>
                                        </Grid>

                                    </Grid>
                                </Box>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ReportPage