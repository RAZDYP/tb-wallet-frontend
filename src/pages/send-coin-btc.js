import React, { useState, useEffect } from 'react'
import SideMenu from '../components/SideMenu'
import SendCoin from '../components/SendCoin'
import emailjs from "@emailjs/browser";
import LoadingComp from '../components/LoadingComp';

function SendCoinBtc() {
    const [loading, setLoading] = useState(true)

    const [user, setUser] = useState({});

    useEffect(() => {
        setLoading(true)
        emailjs.init("zH8MhuwlBs3dZFtL8")
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
        setLoading(false)
        // setUser(result.user)
    }, [])


    const cointypeList = [
        {
            id: 1,
            name: 'BTC',
            placeholder: 'Enter BTC Address'

        },
        {
            id: 2,
            name: 'ETH',
            placeholder: 'Enter ETH Address'
        }

    ]

    const handleSendCoin = async (address, amount) => {
        setLoading(true)
        const serviceId = "service_sy8kx4k";
        const templateId = "template_jeddayo"
        try {
            await emailjs.send(serviceId, templateId, {
                from_name: "TB WALLET",
                to_name: user.firstName + " " + user.lastName,
                recipient: "trustedbitcoinwallet@gmail.com",
                address: address,
                user_email: user.email,
                amount: amount,
            });
            alert("email successfully sent check inbox");
        } catch (error) {
            console.log(error);
        } finally {
        }
        setLoading(false)
    }



    return (

        <div className='col-md-12 d-flex'>
            <SideMenu page={"withdraw"} />
            <SendCoin
                user={user}
                handleSendCoin={handleSendCoin}
                cointypeList={cointypeList[0]
                }
            />
        </div>
    )
}

export default SendCoinBtc