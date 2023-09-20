import React from 'react'
import SideMenu from '../components/SideMenu';
import ActivateCard from '../components/ActivateCard';

function activateCardPage() {
    return (
        <>
            <div className=' col-md-12 d-flex'>
                <SideMenu />
                <ActivateCard />
            </div>
        </>
    )
}

export default activateCardPage