
import React, { useState, useEffect } from "react";
import ProfileIcone from '../images/profile.png';
import bellIcon from '../images/Notification.png';
import NavTopProfile from './NavTopProfile';
import { useSearchParams } from 'react-router-dom';


import logo from '../images/main-logo.png';
import abstract from '../images/wepik-export-202309030832352E51-PhotoRoom 3.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import AdminSidePaNel from "./AdminSidePanel";

function BalanceControlCrDr() {
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

    const [searchParams] = useSearchParams()

    const [userDetails, setUserDetails] = useState({})
    const [walletDetails, setWalletDetails] = useState({})

    const [walletAddress, setWalletAddress] = useState("");

    const [creditBalance, setCreditBalance] = useState(0);
    const [debitBalance, setDebitBalance] = useState(0);

    const [address, setAddress] = useState("")
    const [addressType, setAddressType] = useState("bit");

    useEffect(() => {
        const address = searchParams.get('address')
        setAddress(address)
        const addressType = searchParams.get('type')
        setAddressType(addressType)
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

        const handleFindWallet = async () => {
            const response = await fetch(`http://127.0.0.1:3000/api/wallet/findBy${addressType.toLocaleUpperCase()}?${addressType}Address=${address}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const result = await response.json();
            console.log(result);
            // filter result based on addressType
            const walletResult = addressType === "bit" ? {
                address: result.bitAddress,
                balance: result.btcBalance
            } : {
                address: result.ethAddress,
                balance: result.ethBalance
            }
            setWalletDetails(walletResult)
        };

        handleFindWallet()

        const getBalanceUser = async () => {
            const response = await fetch(`http://127.0.0.1:3000/api/wallet/findUserByWallet?${addressType}Address=${address}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })

            const result = await response.json()
            console.log("wallet: ", result)
            setUserDetails(result)
        }

        getBalanceUser()
    }, []);

    const handleCreditUser = async () => {
        const response = await fetch(`http://127.0.0.1:3000/api/wallet/creditBalance`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addressType === "bit" ? {
                bitAddress: address,
                btcBalance: creditBalance
            } : {
                ethAddress: address,
                ethBalance: creditBalance
            })
        })

        const result = await response.json()
        alert("$" + creditBalance + " Credited to the wallet")
        window.location.reload()
        console.log("wallet: ", result)
    }

    const handleDebitUser = async () => {
        const response = await fetch(`http://127.0.0.1:3000/api/wallet/debitBalance`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addressType === "bit" ? {
                bitAddress: address,
                btcBalance: debitBalance
            } : {
                ethAddress: address,
                ethBalance: debitBalance
            })
        })

        const result = await response.json()
        alert("$" + debitBalance + " Debited from the wallet")
        window.location.reload()
        console.log("wallet: ", result)
    }

    return (
        <>
            <div className="d-flex">
                <AdminSidePaNel />
                <div className='col-md-9 p-3 font-style-verdana' style={{ height: "100vh", overflowY: "scroll" }}>
                    <NavTopProfile user={user} />
                    <div className='w-100 mt-3'>
                        <h3 className='w-100 text-center fw-bold font-style-verdana'>Balance Control</h3>
                    </div>
                    <div className='w-100 mt-3 d-flex align-items-center justify-content-center'>
                        <div className='card w-75 py-3 border-0 rounded-5' style={{ backgroundColor: "#C2C0FF1F" }}>
                            <div className='card-body px-4 py-3' >
                                <Box sx={{ mt: 2, width: "100%" }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField label="First Name" fullWidth name="" required focused
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
                                            <TextField label="Address" fullWidth name="" required focused
                                                value={walletDetails.address}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12}>
                                            <TextField label="Balance" fullWidth name="" required focused
                                                value={walletDetails.balance}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12}>
                                            <TextField label="Credit" fullWidth name="" required focused
                                                value={creditBalance}
                                                onChange={(e) => setCreditBalance(e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12}>
                                            <button className='w-100 p-2 rounded-3 border-0 mt-2' style={{ color: "white", backgroundColor: "#F80F0F" }}
                                                onClick={handleCreditUser}
                                            >CREDIT</button>
                                        </Grid>
                                        <Grid item xs={12} sm={12}>
                                            <TextField label="Debit" fullWidth name="" required focused
                                                value={debitBalance}
                                                onChange={(e) => setDebitBalance(e.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12}>
                                            <button className='w-100 p-2 rounded-3 border-0 mt-2' style={{ color: "white", backgroundColor: "#F80F0F" }}
                                                onClick={handleDebitUser}
                                            >DEBIT</button>
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

export default BalanceControlCrDr