import React from 'react'
import SideMenu from '../components/SideMenu'
import SendCoin from '../components/SendCoin'


function SendCoinPage() {
    return (
        <div className='col-md-12 d-flex'>
            <SideMenu />
            <SendCoin />
        </div>
    )
}

export default SendCoinPage