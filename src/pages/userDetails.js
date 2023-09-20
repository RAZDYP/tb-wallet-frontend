import React from 'react'
import AdminSidePaNel from '../components/AdminSidePanel'
import UserDetails from '../components/UserDetails'
import UserDetailsResults from '../components/UserDetailsResult'
import BalanceControl from '../components/BalanceControl'
import BalanceControlCrDr from '../components/BalanceControlCrDr'
import CardControl from '../components/CardControl'
import CardControlType from '../components/CardControlType'
import AdminSingleUserRegister from '../components/AdminSingleUserRegister'
import AdminUpdateQR from '../components/AdminUpdateQR'
import ActivateCardPayment from '../components/ActivateCardPayment'


function AdminPanel() {

    return (
        <div className=' col-md-12 d-flex'>
            <div style={{ height: "100vh", overflow: "scroll" }} className='col-md-9'>
                <UserDetails />
                {/* <CardControl /> */}
                {/* <CardControlType /> */}
                {/* <AdminSingleUserRegister /> */}
                {/* <AdminUpdateQR /> */}
                {/* <ActivateCardPayment /> */}
            </div>
        </div>
    )
}

export default AdminPanel