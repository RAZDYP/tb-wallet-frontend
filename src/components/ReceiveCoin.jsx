import React, {useState, useEffect} from 'react'
import ProfileIcone from '../images/profile.png';
import bellIcon from '../images/Notification.png';
import Qrcode from '../images/qr-code.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import NavTopProfile from './NavTopProfile';

function ReceiveCoin(props) {


    const [user, setUser] = useState({});

    useEffect(() => {
        const token = localStorage.getItem('token')
        const email = localStorage.getItem('email')

        const getUser = async () => {
            const response = await fetch(`http://127.0.0.1:3000/api/users/find?email=${email}`, {
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
        <div className='col-md-9 p-3 font-style-verdana'>
            <NavTopProfile user={user} />
            <div className='w-100 mt-4'>
                <h3 className='w-100 text-center fw-bold font-style-verdana'>Receive BTC</h3>
            </div>
            <div className='w-100 mt-4 d-flex align-items-center justify-content-center'>
                <div className='card col-md-4 px-3 py-3 border-0 rounded-5' style={{ backgroundColor: "#C2C0FF1F" }}>
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
            </div>
            <div className='mt-3 w-100 d-flex align-items-center justify-content-center '>
                <div className='col-md-4 d-flex align-items-center px-4 py-3 rounded-4 justify-content-between' style={{ backgroundColor: "#CECDFF" }}>
                    <FontAwesomeIcon icon={faCircleInfo} />
                    <p className='m-0 small'>Send only Bitcoin (BTC) to this address.</p>
                </div>
            </div>
            <div className='w-100 d-flex justify-content-end mt-5 pe-4'>
                <div className='text-center p-4 ' style={{ backgroundColor: "#C2C0FF", borderRadius: "40px" }}>
                    <h3 className='fw-bold px-2 m-0'>T</h3>
                </div>
            </div>
        </div>
    )
}

export default ReceiveCoin