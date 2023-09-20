import React from 'react'
import SideMenu from '../components/SideMenu';
import ReceiveCoin from '../components/ReceiveCoin';

function receiveCoinPage() {
    return (
        <>
            <div className=' col-md-12 d-flex'>
                <SideMenu />
                <ReceiveCoin />
            </div>
        </>
    )
}

export default receiveCoinPage