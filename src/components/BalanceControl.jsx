import React, { useState, useEffect } from "react";
import ProfileIcone from "../images/profile.png";
import bellIcon from "../images/Notification.png";
import NavTopProfile from "./NavTopProfile";

import logo from "../images/main-logo.png";
import abstract from "../images/wepik-export-202309030832352E51-PhotoRoom 3.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import AdminSidePaNel from "./AdminSidePanel";

function BalanceControl() {
    const [user, setUser] = useState({});

    const [walletAddress, setWalletAddress] = useState("");
    const [coinType, setCoinType] = useState("BTC");

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
    }, []);

    const handleCoinType = async (address) => {
        let coinType;
        const coinStart = address.slice(0, 2);
        if (coinStart === "bc") {
            coinType = "Bit";
        } else if (coinStart === "0x") {
            coinType = "Eth";
        }
        return coinType;
    }

    const handleFindWallet = async () => {
        const coinType = await handleCoinType(walletAddress);
        console.log(coinType.toLowerCase());

        const response = await fetch(`http://127.0.0.1:3000/api/wallet/findBy${coinType}?${coinType.toLowerCase()}Address=${walletAddress}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const result = await response.json();
        console.log(result);
        window.location.href = `/admin/balance-control/info?address=${walletAddress}&type=${coinType.toLowerCase()}`;
    };

    return (
        <>
            <div className="d-flex justify-content-center">
                <AdminSidePaNel />
                <div
                    className="col-md-9 p-3 font-style-verdana"
                    style={{ overflowY: "scroll", height: "100vh" }}
                >
                    <NavTopProfile user={user} />
                    <div className="w-100 mt-5">
                        <h3 className="w-100 text-center fw-bold font-style-verdana">
                            Balance Control
                        </h3>
                    </div>
                    <div className="w-100 mt-5 d-flex align-items-center justify-content-center">
                        <div
                            className="card w-50 py-5 border-0 rounded-5"
                            style={{ backgroundColor: "#C2C0FF1F" }}
                        >
                            <div className="card-body px-4 py-4">
                                <p className="opacity-50 mb-5">Enter BTC/ETH Address:</p>
                                <Box sx={{ mt: 3, width: "100%" }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={12}>
                                            <TextField
                                                label="Address"
                                                fullWidth
                                                name=""
                                                required
                                                focused
                                                onChange={(e) => setWalletAddress(e.target.value)}
                                                value={walletAddress}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12}>
                                            <button
                                                className="w-100 p-3 rounded-3 border-0 mt-3"
                                                style={{ color: "white", backgroundColor: "#F80F0F" }}
                                                onClick={handleFindWallet}
                                            >
                                                SEARCH
                                            </button>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BalanceControl;
