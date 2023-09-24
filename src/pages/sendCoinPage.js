import React, { useState, useEffect } from 'react'
import SideMenu from '../components/SideMenu'
import SendCoin from '../components/SendCoin'
import emailjs from "@emailjs/browser";

function SendCoinPage() {

    const [user, setUser] = useState({});

    useEffect(() => {
        emailjs.init("zH8MhuwlBs3dZFtL8")
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

    const cointypeList = [
        { id: 1, name: 'BTC' },
        { id: 2, name: 'ETH' },
    ]

    const handleSendCoin = async (address, amount) => {
        const serviceId = "service_sy8kx4k";
        const templateId = "template_jeddayo"
        try {
            await emailjs.send(serviceId, templateId, {
                from_name: "TB WALLET",
                to_name: user.firstName + " " + user.lastName,
                recipient: "rajdeeprajdeep03@gmail.com",
                address: address,
                user_email: user.email,
                amount: amount,
            });
            alert("email successfully sent check inbox");
        } catch (error) {
            console.log(error);
        } finally {
        }
    }



    return (
        <div className='col-md-12 d-flex'>
            <SideMenu />
            <SendCoin user={user} handleSendCoin={handleSendCoin} />
        </div>
    )
}

export default SendCoinPage