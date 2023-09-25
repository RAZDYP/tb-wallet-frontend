import SideMenu from '../components/SideMenu';
import React from 'react'
import SendCoin from '../components/SendCoin';
import ProfileIcone from '../images/profile.png';
import bellIcon from '../images/Notification.png';
import Qrcode from '../images/qr-code.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCopy, faCircleInfo, faChartSimple, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import ReceiveCoin from '../components/ReceiveCoin';
import CircleIcon from '../images/circle-abstract.png';
import subtractIcon from '../images/Subtract.png';
import barchart from '../images/bar-chart.png';
import BarchartRed from '../images/BarChartRed.png';
import ActivateCardIcon from '../images/activate-card.png';
import BsvIcon from '../images/BSV.png';
import ethIcon from '../images/ETH.png'
import NavTopProfile from './NavTopProfile';
import classicCardIcon from '../images/classic-card.png';


function ActivateCard(props) {
    return (
        <div className='col-md-9 p-3 font-style-verdana'>
            <NavTopProfile user={props.user} />
            <div className='w-100 px-4 pt-2 mt-3'>
                <h2 className='fw-bold m-0'>Your Card</h2>
            </div>
            <div className='w-100 d-flex align-items-center justify-content-center'>
                <div className='d-flex align-items-center'>
                    <img src={ActivateCardIcon} width={500} alt="subtract icon" />
                    {/* <img src={classicCardIcon} width={400} alt="subtract icon" className='m-4' /> */}
                    <a href='/activate-card/card-list' className='m-0 p-0 border-0 bg-transparent opacity-50 pt-5'><h3 className='fw-semibold'>Activate Card <FontAwesomeIcon icon={faChevronRight} /></h3></a>
                </div>

            </div>
            <p className='fw-semibold px-4 mt-4'>Withdraw using</p>
            <div className='mt-2 px-4 w-100 d-flex align-items-end justify-content-between'>
                <a href='/btc-chart' className='col-md-4' >
                    <button className="m-0 p-0 border-0 bg-transparent col-md-12 rounded-4">
                        <div className='card p-3 border-0 rounded-4 shadow w-100'>
                            <div className='card-header border-0 bg-transparent d-flex justify-content-between align-items-center'>
                                <div>
                                    <p className='m-0 small fw-semibold text-start opacity-50'>Bitcoin</p>
                                    <h5 className='fw-semibold'>$24000.50</h5>
                                </div>
                                <FontAwesomeIcon icon={faChartSimple} />
                            </div>
                            <div className='card-body py-0 px-3 d-flex align-items-center justify-content-between'>
                                <img src={BsvIcon} alt="subtract icon" />
                                <h2 className='m-0 opacity-50'><FontAwesomeIcon icon={faChevronRight} /></h2>
                            </div>
                        </div>
                    </button>
                </a>
                <a href='/eth-chart' className='col-md-4' >
                    <button className="m-0 p-0 border-0 bg-transparent col-md-12 rounded-4">
                        <div className='card p-3 border-0 rounded-4 shadow w-100'>
                            <div className='card-header border-0 bg-transparent d-flex justify-content-between align-items-center'>
                                <div>
                                    <p className='m-0 small fw-semibold text-start opacity-50'>Ethereum</p>
                                    <h5 className='fw-semibold'>$1850.50</h5>
                                </div>
                                <FontAwesomeIcon icon={faChartSimple} />
                            </div>
                            <div className='card-body py-0 px-3 d-flex align-items-center justify-content-between'>
                                <img src={ethIcon} alt="subtract icon" />
                                <h2 className='m-0 opacity-50'><FontAwesomeIcon icon={faChevronRight} /></h2>
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

export default ActivateCard