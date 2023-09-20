import React from 'react'
import ProfileIcone from '../images/profile.png';
import bellIcon from '../images/Notification.png';
import NavTopProfile from './NavTopProfile';

function SendCoin() {
    return (
        <>
            <div className='col-md-9 p-3 font-style-verdana'>
                <NavTopProfile />
                <div className='w-100 mt-5'>
                    <h3 className='w-100 text-center fw-bold font-style-verdana'>Send BTC</h3>
                </div>
                <div className='w-100 mt-5 d-flex align-items-center justify-content-center'>
                    <div className='card w-50 py-4 border-0 rounded-5' style={{ backgroundColor: "#C2C0FF1F" }}>
                        <div className='card-body px-4 py-5' >
                            <input type='text' className='form-control mb-4 p-3 rounded-3' style={{ color: "#B8B8B8" }} placeholder='Bitcoin Address' />
                            <input type='number' className='form-control mb-5 p-3 rounded-3' style={{ color: "#B8B8B8" }} placeholder='Enter Amount' />
                            <button className='btn btn-dark w-100 p-3 rounded-3 border-0 ' style={{ color: "white", backgroundColor: "#F80F0F" }}>Send</button>
                        </div>
                    </div>
                </div>
                <div className='w-100 d-flex justify-content-end mt-5 pe-4'>
                    <div className='text-center p-4 ' style={{ backgroundColor: "#C2C0FF", borderRadius: "40px" }}>
                        <h3 className='fw-bold px-2 m-0'>T</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SendCoin