import React from 'react';
import logo from '../images/main-logo.png';
import abstract from '../images/wepik-export-202309030832352E51-PhotoRoom 3.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import LoadingComp from '../components/LoadingComp';

function SignUp() {

    const [loading, setLoading] = useState(false)



    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassowrd] = useState('')
    const [referralCode, setReferralCode] = useState('')

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [isPasswordMatch, setIsPasswordMatch] = useState(false)

    function checkPassword() {
        if (password === confirmPassword) {
            setIsPasswordMatch(true)
        } else {
            setIsPasswordMatch(false)
        }
    }

    async function handleSubmit(e) {
        setLoading(true);
        e.preventDefault()
        console.log(firstName, lastName, email, password, confirmPassword, referralCode)

        const data = {
            firstName,
            lastName,
            email,
            password,
        }

        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        })
        const result = await response.json()
        console.log(result)
        setLoading(false);

        setSnackbarMessage(result.message);
        setOpenSnackbar(true);
        // window.location.href = '/login'
        setTimeout(() => {
            window.location.href = '/login'
        }, 3000)
    }


    return (
        <>
            {loading ? <LoadingComp /> : <div className='d-flex align-items-center w-100'>
                {/* LEFT SECTION  */}
                <div className='p-0 m-0' style={{ height: "100vh", color: "white", width: "660px" }}>
                    <div className='' style={{ width: "500px", color: "#FEBB04", height: "100vh", backgroundColor: "#1E1D23" }}>
                        <div className='d-flex align-items-center pt-2'>
                            <img src={logo} width={100} className="" alt="logo" />
                            <h2 className='m-0'>Trusted Bitcoin Wallet</h2>

                        </div>
                        <img src={abstract} width={430} className="" alt="logo" style={{ position: "absolute", display: "block", left: "180px", top: "160px" }} />
                    </div>
                </div>
                {/* RIGHT MAIN SECTION */}
                <div className='bg-white p-5 d-flex flex-column align-items-center' style={{ height: "100vh", borderRadius: "40px 0px 0px 40px", width: "860px" }} >
                    <h1 className='fw-bold mb-4 mt-2'>Create Account</h1>
                    <Box component="form" sx={{ mt: 3, width: "80%" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField label="First Name" fullWidth name="" required focused value={firstName}
                                    onChange={(e) => {
                                        setFirstName(e.target.value)
                                    }
                                    }
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField label="Last Name" fullWidth name="" required focused value={lastName}
                                    onChange={(e) => {
                                        setLastName(e.target.value)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField label="Email" fullWidth name="" required focused className='mt-3' value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField label="Password" fullWidth name="" required focused className='mt-3' value={password} type='password'
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                        checkPassword()
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField label="Confirm Password" fullWidth name="" required focused className='mt-3' value={confirmPassword} type='password'
                                    onChange={(e) => {
                                        setConfirmPassowrd(e.target.value)
                                        checkPassword()
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField label="Referral Code (if any)" fullWidth name="" required="false" focused className='mt-3' value={referralCode}
                                    onChange={(e) => {
                                        setReferralCode(e.target.value)
                                    }}

                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <button className='w-100 p-2 rounded-3 border-0 bg-dark mt-3' style={{ color: "white" }} disabled={isPasswordMatch ? true : false} onClick={handleSubmit}>{loading ? "Signing Up..." : "Sign Up"}</button>
                            </Grid>
                        </Grid>
                        <p className='text-start mt-2 fw-semibold' >Already Have an Account ? <a href='/login' className='text-decoration-none' style={{ color: "#FEBB04" }}>Login</a></p>

                    </Box>

                </div>
            </div>}

            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>

        </>
    )
}

export default SignUp