
import React from 'react'
import ProfileIcone from '../images/profile.png';
import bellIcon from '../images/Notification.png';
import NavTopProfile from './NavTopProfile';
import logo from '../images/main-logo.png';
import abstract from '../images/wepik-export-202309030832352E51-PhotoRoom 3.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import QrCodeIcon from '../images/qr-code.png';
import AdminSidePaNel from './AdminSidePanel';

function AdminUpdateQR() {
    return (
        <>
            <div className='d-flex justify-content-between'>
                <AdminSidePaNel />

                <div className='col-md-9 p-3 font-style-verdana' style={{ overflowY: "scroll", height: "100vh" }}>
                    <NavTopProfile />
                    <div className='w-100 mt-3'>
                        <h3 className='w-100 text-center fw-bold font-style-verdana'>Update OR</h3>
                    </div>
                    <div className='w-100 mt-4 d-flex align-items-center justify-content-center'>
                        <div className='card w-75 py-3 border-0 rounded-5' style={{ backgroundColor: "#C2C0FF1F" }}>
                            <div className='card-body px-4 py-3' >
                                <p className='opacity-75 fw-semibold mb-4'>Previous QR and Address</p>
                                <div className='w-100 p-2  d-flex flex-column align-items-center justify-content-center mb-3'>
                                    <div className='text-center'>
                                        <img src={QrCodeIcon} alt="" />
                                        <p className='w-100 text-center mt-2'>bc1q43s0xcy6gazquqfxgmuljafu8wwcyqcwjn2q50</p>
                                    </div>
                                </div>
                                <div className='w-100'>
                                    <h4 className='opacity-75 mb-0 fw-semibold'>New QR and Address</h4>
                                    <div className='w-100 mt-3 border rounded-4' style={{ color: "#626265" }}>
                                        <input type='file' className='w-100 border-0' id='qr-file' style={{ display: "none" }} />
                                        <label className='w-100  rounded-4' For="qr-file">
                                            <div className='w-100 text-start rounded-4'>
                                                <div className='btn btn-light-secondary border rounded-4 p-3'>Choose File</div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className='w-100 mt-3 border rounded-4 d-flex' style={{ color: "#626265" }}>
                                        <div className='btn  btn-light-secondary border rounded-4 p-3'>
                                            <p className='m-0'>BTC Address</p>
                                        </div>
                                        <input type='text' className='w-75 border-0 p-3 bg-transparent' />
                                    </div>
                                    <button className='btn mt-3 rounded-3 btn-primary border-0 w-100 p-3' style={{ backgroundColor: "#F80F0F" }}>UPDATE</button>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AdminUpdateQR