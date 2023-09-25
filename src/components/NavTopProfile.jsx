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

function NavTopProfile(props) {
    return (
        <div className='w-100 d-flex justify-content-end pe-3'>
            <div className=' align-items-center'>
                <p className='fw-semibold m-0'>{props.user.firstName} {props.user.lastName} <br></br>
                </p> <small className='opacity-50'>{props.user.email}</small>
            </div>
        </div>
    )
}

export default NavTopProfile