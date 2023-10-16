import React, { useState, useEffect } from 'react'
import SideMenu from '../components/SideMenu';
import ActivateCard from '../components/ActivateCard';
import classicCardIcon from '../images/classic-card.png';
import silverCardIcon from '../images/silver.png';
import goldCardIcon from '../images/gold.png';
import platinumCardIcon from '../images/platinum.png';
import merchantCardIcon from '../images/merchant.png';
import inactiveCardIcon from '../images/inactive-card.png';

function ActivateCardPage() {


    const [loading, setLoading] = useState(true);



    const [user, setUser] = useState({});
    const [card, setCard] = useState({});
    const [cardType, setCardType] = useState(null);
    const [cardStatus, setCardStatus] = useState(null);
    const [cardSrc, setCardSrc] = useState(null);

    useEffect(() => {
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

        const getCard = async () => {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/card/findByEmail?email=${email}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })

            const result = await response.json()
            console.log(result)
            setCard(result)
            setCardType(result.cardType)
            setCardStatus(result.cardStatus)
            const cardType = result.cardType
            setCardSrc(result.cardStatus === "INACTIVE" ? inactiveCardIcon : cardType === "INACTIVE" ? inactiveCardIcon : cardType === "CLASSIC" ? classicCardIcon : cardType === "SILVER" ? silverCardIcon : cardType === "GOLD" ? goldCardIcon : cardType === "PLATINUM" ? platinumCardIcon : merchantCardIcon)
        }

        getCard()
        // setUser(result.user)
    }, [])


    return (
        <>
            <div className=' col-md-12 d-flex'>
                <SideMenu page={"withdraw"} />
                <ActivateCard
                    user={user}
                    cardSrc={cardSrc}
                    cardStatus={cardStatus}
                />
            </div>
        </>
    )
}

export default ActivateCardPage