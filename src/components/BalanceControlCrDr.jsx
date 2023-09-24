
import React, { useState, useEffect } from "react";
import ProfileIcone from '../images/profile.png';
import bellIcon from '../images/Notification.png';
import NavTopProfile from './NavTopProfile';


import logo from '../images/main-logo.png';
import abstract from '../images/wepik-export-202309030832352E51-PhotoRoom 3.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

function BalanceControlCrDr() {

    const [user, setUser] = useState({});

    const [walletAddress, setWalletAddress] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        const email = localStorage.getItem("email");
        const getUser = async () => {
            const response = await fetch(`http://127.0.0.1:3000/api/users/find`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const result = await response.json();
            setUser(result.user);
        };

        getUser();
    }, []);

    return (
        <>
            <div className='col-md-12 p-3 font-style-verdana'>
                <NavTopProfile user={user} />
                <div className='w-100 mt-3'>
                    <h3 className='w-100 text-center fw-bold font-style-verdana'>Balance Control</h3>
                </div>
                <div className='w-100 mt-3 d-flex align-items-center justify-content-center'>
                    <div className='card w-75 py-3 border-0 rounded-5' style={{ backgroundColor: "#C2C0FF1F" }}>
                        <div className='card-body px-4 py-3' >
                            <Box component="form" sx={{ mt: 2, width: "100%" }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField label="Full Name" fullWidth name="" required focused />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField label="Last Name" fullWidth name="" required focused />
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <TextField label="Email" fullWidth name="" required focused />
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <TextField label="Address" fullWidth name="" required focused />
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <TextField label="Balance" fullWidth name="" required focused />
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <TextField label="Credit" fullWidth name="" required focused />
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <button className='w-100 p-2 rounded-3 border-0 mt-2' style={{ color: "white", backgroundColor: "#F80F0F" }}>CREDIT</button>
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <TextField label="Debit" fullWidth name="" required focused />
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <button className='w-100 p-2 rounded-3 border-0 mt-2' style={{ color: "white", backgroundColor: "#F80F0F" }}>DEBIT</button>
                                    </Grid>

                                </Grid>
                            </Box>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default BalanceControlCrDr