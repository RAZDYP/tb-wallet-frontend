import React from 'react'
import logo from '../images/main-logo.png';
import DashboardIcon from '../images/dashboard-icon.png';
import WithdrawIcon from '../images/Withdraw-icon.png';
import BtcDeibtcardlogo from '../images/btc-debit-card.png';
import Support from '../images/Support.png';
import logoutIcon from '../images/logout.png';

function SideMenu() {



    return (
        <>
            <div className='col-md-3 p-3 card' style={{ backgroundColor: "#1E1D23", height: "100vh", borderRadius: "0px 35px 35px 0px" }}>
                <div className='w-100 d-flex align-items-center card-header mt-3'>
                    <img src={logo} width={70} className="me-2" alt="logo" />
                    <h5 className=' m-0 ' style={{ color: "#FEBB04" }}>Trusted Bitcon Wallet</h5>
                </div>
                <div className='card-body mt-5 ps-5 ms-3 dashboard-side-menulist'>
                    <div className='d-flex align-items-center '>
                        <img src={DashboardIcon} width={25} className="me-4" alt="logo" />
                        <a href='./dashboard' className='m-0 dashboard-side-menu-text'>Dashboard</a>
                    </div>
                    <div className='d-flex align-items-center '>
                        <img src={WithdrawIcon} width={25} className="me-4" alt="logo" />
                        <a href='/send-coin-btc' className='m-0 dashboard-side-menu-text'>Withdraw</a>
                    </div>
                    <div className='d-flex align-items-center '>
                        <img src={BtcDeibtcardlogo} width={25} className="me-4" alt="logo" />
                        <a href='/activate-card' className='m-0 dashboard-side-menu-text'>Bitcoin Debit Card</a>
                    </div>
                    <div className='d-flex align-items-center'>
                        <img src={Support} width={25} className="me-4" alt="logo" />
                        <a href='/dashboard-support' className='m-0 dashboard-side-menu-text'>Support</a>
                    </div>
                    <div className='d-flex align-items-center '>
                        <img src={Support} width={25} className="me-4" alt="logo" />
                        <a href='/dashboard-report' className='m-0 dashboard-side-menu-text'>Report</a>
                    </div>
                    <div className='d-flex align-items-center '>
                        <img src={Support} width={25} className="me-4" alt="logo" />
                        <a href='/dashboard-settings' className='m-0 dashboard-side-menu-text'>Settings</a>
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

export default SideMenu