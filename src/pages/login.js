import React, { useState } from 'react';
import logo from '../images/main-logo.png';
import abstract from '../images/wepik-export-202309030832352E51-PhotoRoom 3.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoadingComp from '../components/LoadingComp';

const Login = () => {

    const [loading, setLoading] = useState(false)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false)


    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true);

        console.log(email, password)

        const data = {
            email,
            password
        }

        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        })
        const result = await response.json()
        console.log(result)
        setLoading(false);

        localStorage.setItem('user_id', result.user.userId)
        localStorage.setItem('email', result.user.email)
        alert(result.message)

        window.location.href = '/dashboard'
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    console.log(process.env.REACT_APP_BASE_URL)

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
                    <h1 className='fw-bold mb-4 mt-5 text-start'>Login</h1>
                    <Box component="form" sx={{ mt: 3, width: "80%" }}>
                        <Grid container spacing={2}>

                            <Grid item xs={12} sm={12}>
                                <TextField label="Email" fullWidth name="" required focused
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField label="Password" className='mt-3' fullWidth name="" required focused type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={togglePasswordVisibility}
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12} sm={12}>
                                <button className='w-100 p-2 rounded-3 border-0 bg-dark mt-3' style={{ color: "white" }}
                                    onClick={handleSubmit}
                                >{loading ? "Logging..." : "LOGIN"}</button>
                            </Grid>
                        </Grid>
                        <p className='text-end mt-2 mb-0 fw-semibold' > <a href='' className='text-decoration-none' style={{ color: "#FEBB04" }}>Forgot Password</a></p>
                        <p className='text-start mt-1 fw-semibold' >Don't Have an Account ? <a href='./signup' className='text-decoration-none' style={{ color: "#FEBB04" }}>Signup</a></p>

                    </Box>

                </div>
            </div>}


        </>
    )
}

export default Login