import React from 'react'
import ProfileIcone from '../images/profile.png';
import bellIcon from '../images/Notification.png';
import Qrcode from '../images/qr-code.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import NavTopProfile from './NavTopProfile';
import AdminSidePaNel from './AdminSidePanel';
import BitcoinAcceptedIcon from '../images/BitcoinAccepted.png';
import ActivateCardIcon from '../images/activate-card.png';
import MoneyGuarenteeIcon from '../images/moneyGuarentee.png';
import { useState, useEffect } from 'react';
import SideMenu from './SideMenu';

function PayAddressComp() {
    const [user, setUser] = useState({});
    useEffect(() => {
        const token = localStorage.getItem('token')
        const email = localStorage.getItem('email')

        const getUser = async () => {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/users/find?email=${email}`, {
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

    return (
        <div className='d-flex justify-content-between'>
            <SideMenu page={"activate-card"} />
            <div className='col-md-9 p-3 font-style-verdana' style={{ overflow: "scroll", height: "100vh" }}>
                <NavTopProfile user={user} />
                <div className='w-100 mt-4 d-flex flex-column align-items-center'>
                    <img src={BitcoinAcceptedIcon} className="img-fluid mb-3" alt="logo" />
                    <h4 className='w-100 text-center fw-bold font-style-verdana'>Scan or Copy Address to Pay</h4>
                </div>
                <div className='w-100 mt-4 d-flex align-items-center justify-content-center'>

                    <div className='card col-md-4 px-3 py-3 border-0 rounded-5 d-flex align-items-center' style={{ backgroundColor: "#C2C0FF1F" }}>
                        <div className='card-body w-100 px-3 py-2 d-flex flex-column align-items-center justify-content-center' >
                            <img src={Qrcode} className="" alt="logo" style={{}} />
                            <div className='text-center mt-2 w-100'>
                                <p className='text-center m-0'>bc1q43s0xcy6gazquqfxgmuljafu8wwcyqcwjn2q50</p>
                                <button className='m-0 p-0 bg-transparent border-0'>
                                    <FontAwesomeIcon icon={faCopy} />
                                </button>
                            </div>

                        </div>
                    </div>
                    <img src={MoneyGuarenteeIcon} width={70} className="ms-4" alt="logo" />
                </div>
                <div className='w-100 mt-5 d-flex align-items-center justify-content-center'>
                    <div className='w-75 text-center'>
                        <p className='m-0 text-danger fw-semibold'>Note: After payment please send the payment receipt or screenshot to</p>
                        <a href="trustedbitcoinwallet@gmail.com " className=' text-warning fw-semibold' >trustedbitcoinwallet@gmail.com </a>
                        <p className='m-0 fw-semibold'>Your debit card will be activated within 24 hours after payment and also you will get back your card activation fees in your account.</p>
                        <p className='m-0 fw-semibold'>
                            For further information contact at <a href="contact.trustedbitcoinwallet@gmail.com " className=' text-warning' >contact.trustedbitcoinwallet@gmail.com </a>

                        </p>
                    </div>

                </div>

                <div className='w-100 d-flex justify-content-end mt-2 pe-4'>
                    <div className='text-center p-4 ' style={{ backgroundColor: "#C2C0FF", borderRadius: "40px" }}>
                        <h3 className='fw-bold px-2 m-0'>T</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PayAddressComp




