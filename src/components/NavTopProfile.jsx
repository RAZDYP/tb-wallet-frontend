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

function NavTopProfile() {
    return (
        <div className='w-100 d-flex justify-content-end pe-3'>
            <div className='d-flex align-items-center'>
                <img src={bellIcon} width={30} className="me-3" alt="logo" />
                <img src={ProfileIcone} width={50} className="me-3" alt="logo" />
                <p className='fw-semibold m-0'>Sam Myers<br></br>
                    <small className='opacity-50'>sammyers12@gmail.com</small></p>
            </div>
        </div>
    )
}

export default NavTopProfile