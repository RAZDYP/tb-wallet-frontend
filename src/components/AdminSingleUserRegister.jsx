
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

function AdminSingleUserRegister(props) {

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

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassowrd] = useState('')
    const [referralCode, setReferralCode] = useState('')

    const [isPasswordMatch, setIsPasswordMatch] = useState(false)

    function checkPassword() {
        if (password === confirmPassword) {
            setIsPasswordMatch(true)
        } else {
            setIsPasswordMatch(false)
        }
    }

    async function handleSubmit(e) {
        e.preventDefault()
        console.log(firstName, lastName, email, password, confirmPassword, referralCode)

        const data = {
            firstName,
            lastName,
            email,
            password,
        }

        const response = await fetch('http://127.0.0.1:3000/api/users/admin/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        })
        const result = await response.json()
        console.log(result)
        alert(result.message)
        window.location.href = '/login'
    }

    return (
        <>
            <div className='d-flex justify-content-between'>
                <AdminSidePaNel page={"single-user-register"} />

                <div className='col-md-9 p-3 font-style-verdana' style={{ overflowY: "scroll", height: "100vh" }}>
                    <NavTopProfile user={user} />
                    <div className='w-100 mt-3'>
                        <h3 className='w-100 text-center fw-bold font-style-verdana'>Single User Register</h3>
                    </div>
                    <div className='w-100 mt-3 d-flex align-items-center justify-content-center'>
                        <div className='card w-75 py-3 border-0 rounded-5' style={{ backgroundColor: "#C2C0FF1F" }}>
                            <div className='card-body px-4 py-3' >
                                <Box sx={{ mt: 2, width: "100%" }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField label="First Name" fullWidth name="" required focused
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField label="Last Name" fullWidth name="" required focused
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12}>
                                            <TextField label="Email" fullWidth name="" required focused
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12}>
                                            <TextField label="Password" fullWidth name="" required focused
                                                value={password}
                                                onChange={(e) => {
                                                    setPassword(e.target.value)
                                                    checkPassword()
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12}>
                                            <TextField label="Confirm Password" fullWidth name="" required focused
                                                value={confirmPassword}
                                                onChange={(e) => {
                                                    setConfirmPassowrd(e.target.value)
                                                    checkPassword()
                                                }
                                                }

                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12}>
                                            <TextField label="Referral Code (if any)" fullWidth name="" required focused
                                                value={referralCode}
                                                onChange={(e) => setReferralCode(e.target.value)}
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={12}>
                                            <button className='w-100 p-2 rounded-3 border-0 mt-3' style={{ color: "white", backgroundColor: "#F80F0F" }}
                                                disabled={isPasswordMatch ? true : false}
                                                onClick={handleSubmit}
                                            >SIGN UP</button>
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

export default AdminSingleUserRegister