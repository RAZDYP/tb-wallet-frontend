import SideMenu from '../components/SideMenu';
import React from 'react'
import SendCoin from '../components/SendCoin';
import ProfileIcone from '../images/profile.png';
import bellIcon from '../images/Notification.png';
import Qrcode from '../images/qr-code.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCopy, faCircleInfo, faChartSimple } from '@fortawesome/free-solid-svg-icons'
import ReceiveCoin from '../components/ReceiveCoin';
import CircleIcon from '../images/circle-abstract.png';
import subtractIcon from '../images/Subtract.png';
import barchart from '../images/bar-chart.png';
import BarchartRed from '../images/BarChartRed.png';
import NavTopProfile from './NavTopProfile';

function DashboardChart(props) {
    return (
        <div className='col-md-9 p-3 font-style-verdana'>
            <NavTopProfile user={props.user} />
            <div className='w-100 px-4 pt-2 mt-3'>
                <h2 className='fw-bold'>Dashboard</h2>
                <h6 className='fw-semibold opacity-50'>Welcome Back</h6>
                <p>Price: {props.walletDetails.btcBalance + props.walletDetails.ethBalance}</p>

            </div>
            <div className='w-100 d-flex align-items-center'>
                <img src={CircleIcon} width={300} className="" alt="Circle icon" />
                <img src={subtractIcon} width={500} className="dashboard-page-middle-right-icon" alt="subtract icon" />
                <h4 className='dashboard-authors-name'>{props.user.firstName} {props.user.lastName}</h4>
            </div>
            <p className='fw-semibold px-4'>Coins</p>
            <div className='mt-2 px-4 w-100 d-flex align-items-end justify-content-between'>
                <a href='/btc-chart' className='col-md-4'>
                    <button className="m-0 p-0 border-0 bg-transparent col-md-12 rounded-4">
                        <div className='card p-3 border-0 rounded-4 shadow w-100'>
                            <div className='card-header border-0 bg-transparent d-flex justify-content-between align-items-center'>
                                <div>
                                    <p className='m-0 small fw-semibold text-start opacity-50'>Bitcoin</p>
                                    <h5 className='fw-semibold'>${props.currentRateBtc ? props.currentRateBtc.toFixed(2) : null}</h5>
                                </div>
                                <FontAwesomeIcon icon={faChartSimple} />
                            </div>
                            <div className='card-body py-0 px-3'>
                                <img src={barchart} alt="subtract icon" />
                            </div>
                        </div>
                    </button>
                </a>
                <a href='/eth-chart' className='col-md-4'>
                    <button className="m-0 p-0 border-0 bg-transparent col-md-12 rounded-4">
                        <div className='card p-3 border-0 rounded-4 shadow w-100'>
                            <div className='card-header border-0 bg-transparent d-flex justify-content-between align-items-center'>
                                <div>
                                    <p className='m-0 small fw-semibold text-start opacity-50'>Ethereum</p>
                                    <h5 className='fw-semibold'>${props.currentRateEth ? props.currentRateEth.toFixed(2) : null}</h5>
                                </div>
                                <FontAwesomeIcon icon={faChartSimple} />
                            </div>
                            <div className='card-body py-0 px-3'>
                                <img src={BarchartRed} alt="subtract icon" />
                            </div>
                        </div>
                    </button>
                </a>

                <div className='col-md-2 d-flex align-items-center justify-content-start'>
                    <div className='p-4 text-center' style={{ backgroundColor: "#C2C0FF", borderRadius: "40px" }}>
                        <h3 className='fw-bold px-2 m-0'>T</h3>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default DashboardChart