import React, { useState, useEffect } from 'react'
import SideMenu from '../components/SideMenu';
import SingleCard from '../components/SingleCard';
import classicCardIcon from '../images/classic-card.png';
import MerchantIcon from '../images/merchant.png';
import GoldIcon from '../images/gold.png';
import PlatinumIcon from '../images/platinum.png';
import SilverIcon from '../images/silver.png';


function CardListPage() {

    const [cardType, setCardType] = useState({});

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

    const cardList = [
        {
            name: 'Classic Card',
            price: 100,
            withdrawalLimit: 1000,
            imageSrc: classicCardIcon,
            type: 'CLASSIC',
            query: "classic"
        },
        {
            name: 'Merchant Card',
            price: 200,
            withdrawalLimit: 20000,
            imageSrc: MerchantIcon,
            type: 'MERCHANT',
            query: "merchant"
        },
        {
            name: 'Silver Card',
            price: 500,
            withdrawalLimit: 50000,
            imageSrc: SilverIcon,
            type: 'SILVER',
            query: "silver"
        },
        {
            name: 'Gold Card',
            price: 1000,
            withdrawalLimit: 100000,
            imageSrc: GoldIcon,
            type: 'GOLD',
            query: "gold"
        },
        {
            name: 'Platinum Card',
            price: 2000,
            withdrawalLimit: 200000,
            imageSrc: PlatinumIcon,
            type: 'PLATINUM',
            query: "platinum"
        }
    ]

    const handleCardSelect = (type) => {
        setCardType(type)
    }

    const handleCardUpdate = async () => {
        const response = await fetch(`http://127.0.0.1:3000/api/card/updateCard`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: user.email,
                cardType
            })
        })

        const result = await response.json()
        console.log(result)
        alert(result.message)
    }

    return (
        <div className=' col-md-12 d-flex'>
            <SideMenu />
            <div style={{ height: "100vh", overflow: "scroll" }} className='col-md-9'>
                <SingleCard user={user} cardList={cardList} handleCardSelect={handleCardSelect} />
            </div>
            {/* <DashboardChart /> */}
        </div>


    )
}

export default CardListPage