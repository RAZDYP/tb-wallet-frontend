
import React, { useState, useEffect } from 'react'
import ProfileIcone from '../images/profile.png';
import bellIcon from '../images/Notification.png';
import NavTopProfile from './NavTopProfile';
import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

import logo from '../images/main-logo.png';
import abstract from '../images/wepik-export-202309030832352E51-PhotoRoom 3.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import AdminSidePaNel from './AdminSidePanel';

function UserDetailResults() {

    const [searchParams] = useSearchParams()
    const [email, setEmail] = useState('')
    const [user, setUser] = useState({});
    const [userDetails, setUserDetails] = useState({})
    const [walletDetails, setWalletDetails] = useState({})

    useEffect(() => {
        const userEmail = searchParams.get('email')
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

        const getUserDetails = async () => {
            const response = await fetch(`http://127.0.0.1:3000/api/users/find?email=${userEmail}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })

            const result = await response.json()
            console.log("userDetails: ", result)
            setUserDetails(result.user)
        }

        getUserDetails()

        const getWalletDetails = async () => {
            const response = await fetch(`http://127.0.0.1:3000/api/wallet/find`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: userEmail })
            })

            const result = await response.json()
            console.log("walletDetails: ", result)
            setWalletDetails(result)
        }

        getWalletDetails()
    }, [])


    return (
        <>
            <div className='col-md-12 d-flex'>
                <AdminSidePaNel />
                <div className='col-md-9 p-3 font-style-verdana' style={{ height: "100vh", overflowY: "scroll" }}>
                    <NavTopProfile user={user} />
                    <div className='w-100 mt-3'>
                        <h3 className='w-100 text-center fw-bold font-style-verdana'>User Details</h3>
                    </div>
                    <div className='w-100 mt-3 d-flex align-items-center justify-content-center'>
                        <div className='card w-75 py-3 border-0 rounded-5' style={{ backgroundColor: "#C2C0FF1F" }}>
                            <div className='card-body px-4 py-3' >
                                <Box component="form" sx={{ mt: 2, width: "100%" }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField label="Full Name" fullWidth name="" required focused
                                                value={userDetails.firstName}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField label="Last Name" fullWidth name="" required focused
                                                value={userDetails.lastName}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12}>
                                            <TextField label="Email" fullWidth name="" required focused
                                                value={userDetails.email}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12}>
                                            <TextField label="BTC Balance" fullWidth name="" required focused
                                                value={walletDetails.btcBalance}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12}>
                                            <TextField label="ETH Balance" fullWidth name="" required focused
                                                value={walletDetails.ethBalance}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12}>
                                            <TextField label="Card Status" fullWidth name="" required focused />
                                        </Grid>
                                        <Grid item xs={12} sm={12}>
                                            <TextField label="BTC Address" fullWidth name="" required focused
                                                value={walletDetails.bitAddress}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12}>
                                            <TextField label="ETH Address" fullWidth name="" required focused
                                                value={walletDetails.ethAddress}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <button className='w-100 p-2 rounded-3 border-0 mt-3' style={{ color: "white", backgroundColor: "#F80F0F" }}>DELETE ACCOUNT</button>
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <button className='w-100 p-2 rounded-3 border-0 mt-3' style={{ color: "white", backgroundColor: "#F80F0F" }}>BLOCK USER</button>
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <button className='w-100 p-2 rounded-3 border-0 mt-3' style={{ color: "white", backgroundColor: "#F80F0F" }}>VIEW TRANSACTIONS</button>
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

export default UserDetailResults