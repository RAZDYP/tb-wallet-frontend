import SideMenu from '../components/SideMenu';
import React from 'react'
import SendCoin from '../components/SendCoin';
import ProfileIcone from '../images/profile.png';
import bellIcon from '../images/Notification.png';
import Qrcode from '../images/qr-code.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCopy, faCircleInfo, faChartSimple, faChevronRight, faGift, faSquareCheck, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import ReceiveCoin from '../components/ReceiveCoin';
import CircleIcon from '../images/circle-abstract.png';
import subtractIcon from '../images/Subtract.png';
import barchart from '../images/bar-chart.png';
import BarchartRed from '../images/BarChartRed.png';
import ActivateCardIcon from '../images/activate-card.png';
import BsvIcon from '../images/BSV.png';
import ethIcon from '../images/ETH.png'
import MoneyGuarenteeIcon from '../images/moneyGuarentee.png';
import classicCardIcon from '../images/classic-card.png';
import OneSingleCard from './OneSingleCard';
import NavTopProfile from './NavTopProfile';

function SingleCard() {
    return (
        <div className='col-md-12 p-3 font-style-verdana' >
            <NavTopProfile />
            <div className='w-100 px-4 pt-2 mt-3 d-flex flex-column text-center align-items-center'>
                <h4 className='fw-bold m-0 text-center mb-2'>Activate Debit Card</h4>
                <img src={MoneyGuarenteeIcon} width={50} className="mb-2" alt="logo" />
                <p className='m-0'>100% Money Back Guarantee</p>
            </div>
            <div className='w-100 d-flex align-items-center justify-content-center'>
                <div className='w-75'>
                    <hr></hr>
                </div>
            </div>
            <OneSingleCard />
            <div className='w-100 d-flex align-items-center justify-content-center'>
                <div className='w-75'>
                    <hr></hr>
                </div>
            </div>
            <OneSingleCard />

        </div>
    )
}

export default SingleCard