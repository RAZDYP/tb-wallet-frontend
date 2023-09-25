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


function OneSingleCard(props) {
    return (
        <div className='w-100 d-flex align-items-center justify-content-center'>
            <div className='card col-md-5 border-0 px-4 py-3' style={{ backgroundColor: "#C2C0FF1F" }}>
                <div className='card-header border-0 bg-transparent '>
                    <p className='m-0 text-center opacity-50 '>{props.card.name}</p>
                </div>
                <div className='card-body d-flex flex-column align-items-center'>
                    <img src={props.card.imageSrc} width={350} className="mb-2" alt="logo" />
                    <h4 className='fw-semibold'>${props.card.price}</h4>
                    <p className='fw-semibold opacity-50 m-0 text-center mb-3'>USD in BTC<br></br>Withdrawal limit ${props.card.withdrawalLimit}/Day</p>
                    <div className='opacity-25 mb-4'>
                        <p className='mb-2'>  <FontAwesomeIcon icon={faThumbsUp} />       Instant Approval</p>
                        <p className='mb-2'>  <FontAwesomeIcon icon={faSquareCheck} />  WorldWide Accepted</p>
                        <p className='m-0'>   <FontAwesomeIcon icon={faGift} />  Get Rewards On Purchase</p>
                    </div>
                    <a href='../activate-card/card-list/card-payment'><button className='btn btn-primary rounded-3 border-0 px-5 py-2' style={{ backgroundColor: "#8080FF" }}
                        onClick={() => props.handleCardSelect(props.card.type)}>
                        Activate Now
                    </button></a>

                </div>
            </div>
        </div>
    )
}

export default OneSingleCard