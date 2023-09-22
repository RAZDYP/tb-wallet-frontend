import React, { useState, useEffect } from 'react'
import SideMenu from '../components/SideMenu';
import SingleCard from '../components/SingleCard';
import classicCardIcon from '../images/classic-card.png';

function CardListPage() {

    const [user, setUser] = useState({});
    const [cardType, setCardType] = useState({});

    useEffect(() => {
        const token = localStorage.getItem('token')
        const email = localStorage.getItem('email')
        const getUser = async () => {
            const response = await fetch(`http://127.0.0.1:3000/api/users/find`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
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
            type: 'CLASSIC'
        },
        {
            name: 'Gold Card',
            price: 200,
            withdrawalLimit: 2000,
            imageSrc: classicCardIcon,
            type: 'GOLD'
        },
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