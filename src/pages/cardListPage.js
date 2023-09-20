import React from 'react'
import SideMenu from '../components/SideMenu';
import SingleCard from '../components/SingleCard';

function CardListPage() {
    return (
        <div className=' col-md-12 d-flex'>
            <SideMenu />
            <div style={{ height: "100vh", overflow: "scroll" }} className='col-md-9'>
                <SingleCard />
            </div>
            {/* <DashboardChart /> */}
        </div>


    )
}

export default CardListPage