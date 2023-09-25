import React from 'react'
import logo from '../images/main-logo.png';
import DashboardIcon from '../images/dashboard-icon.png';
import WithdrawIcon from '../images/Withdraw-icon.png';
import BtcDeibtcardlogo from '../images/btc-debit-card.png';
import Support from '../images/Support.png';
import logoutIcon from '../images/logout.png';

import ProfileIcon from '../images/profile-icon.png';
import ProfileIcon2 from '../images/profile-icon-2.png';
import CreditCardIcon from '../images/credit-card-icon.png';
import WalletIcon from '../images/wallet-icon.png';
import QrCodeIcon from '../images/qrcode-icon.png';


function AdminSidePaNel() {
    return (
        <>
            <div className='col-md-3 p-3 card' style={{ backgroundColor: "#1E1D23", height: "100vh", borderRadius: "0px 35px 35px 0px" }}>
                <div className='w-100 d-flex align-items-center card-header mt-3'>
                    <img src={logo} width={70} className="me-2" alt="logo" />
                    <h5 className=' m-0 ' style={{ color: "#FEBB04" }}>Trusted Bitcon Wallet</h5>
                </div>
                <div className='card-body mt-3 ps-5 ms-3 dashboard-side-menulist'>
                    <div className='d-flex align-items-center '>
                        <img src={ProfileIcon} width={25} className="me-4" alt="logo" />
                        <a href='/user-details' className='m-0 dashboard-side-menu-text'>User Details</a>
                    </div>
                    <div className='d-flex align-items-center '>
                        <img src={WalletIcon} width={25} className="me-4" alt="logo" />
                        <a href='/balance-control' className='m-0 dashboard-side-menu-text'>Balance Control</a>
                    </div>
                    <div className='d-flex align-items-center '>
                        <img src={CreditCardIcon} width={25} className="me-4" alt="logo" />
                        <a href='/card-control' className='m-0 dashboard-side-menu-text'>Card Control</a>
                    </div>
                    <div className='d-flex align-items-center '>
                        <img src={ProfileIcon2} width={25} className="me-4" alt="logo" />
                        <a href='/single-user-register' className='m-0 dashboard-side-menu-text'>Single User Register</a>
                    </div>
                    <div className='d-flex align-items-center'>
                        <img src={QrCodeIcon} width={25} className="me-4" alt="logo" />
                        <a href='/update-qr' className='m-0 dashboard-side-menu-text'>Update QR</a>
                    </div>
                    <div className='d-flex align-items-center '>
                        <img src={Support} width={25} className="me-4" alt="logo" />
                        <a href='/admin-support' className='m-0 dashboard-side-menu-text'>Support </a>
                    </div>
                    <div className='d-flex align-items-center '>
                        <img src={Support} width={25} className="me-4" alt="logo" />
                        <a href='/admin-report' className='m-0 dashboard-side-menu-text'>Report</a>
                    </div>

                </div>
                <div className='card-footer ps-5 ms-3'>
                    <div className='d-flex align-items-center mb-5'>
                        <img src={logoutIcon} width={25} className="me-4" alt="logo" />
                        <a href='' className='m-0 dashboard-side-menu-text'>Log Out</a>
                    </div>

                </div>

            </div>
        </>

    )
}

export default AdminSidePaNel