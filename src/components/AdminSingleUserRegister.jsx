
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

function AdminSingleUserRegister(props) {
    return (
        <>
            <div className='d-flex justify-content-between'>
                <AdminSidePaNel />

                <div className='col-md-9 p-3 font-style-verdana' style={{ overflowY: "scroll", height: "100vh" }}>
                    <NavTopProfile user={props.user} />
                    <div className='w-100 mt-3'>
                        <h3 className='w-100 text-center fw-bold font-style-verdana'>Single User Register</h3>
                    </div>
                    <div className='w-100 mt-3 d-flex align-items-center justify-content-center'>
                        <div className='card w-75 py-3 border-0 rounded-5' style={{ backgroundColor: "#C2C0FF1F" }}>
                            <div className='card-body px-4 py-3' >
                                <Box component="form" sx={{ mt: 2, width: "100%" }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField label="First Name" fullWidth name="" required focused />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField label="Last Name" fullWidth name="" required focused />
                                        </Grid>
                                        <Grid item xs={12} sm={12}>
                                            <TextField label="Email" fullWidth name="" required focused />
                                        </Grid>
                                        <Grid item xs={12} sm={12}>
                                            <TextField label="Password" fullWidth name="" required focused />
                                        </Grid>
                                        <Grid item xs={12} sm={12}>
                                            <TextField label="Confirm Password" fullWidth name="" required focused />
                                        </Grid>
                                        <Grid item xs={12} sm={12}>
                                            <TextField label="Referral Code (if any)" fullWidth name="" required focused />
                                        </Grid>

                                        <Grid item xs={12} sm={12}>
                                            <button className='w-100 p-2 rounded-3 border-0 mt-3' style={{ color: "white", backgroundColor: "#F80F0F" }}>SIGN UP</button>
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