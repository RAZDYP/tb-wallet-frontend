
import React from 'react'
import ProfileIcone from '../images/profile.png';
import bellIcon from '../images/Notification.png';


import logo from '../images/main-logo.png';
import abstract from '../images/wepik-export-202309030832352E51-PhotoRoom 3.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import SideMenu from '../components/SideMenu';
import NavTopProfile from '../components/NavTopProfile';
import { useState, useEffect } from 'react';
import AdminSidePaNel from '../components/AdminSidePanel';
import LoadingComp from '../components/LoadingComp';





function AdminReportPage() {
    const [loading, setLoading] = useState(false)

    const [user, setUser] = useState({});
    const [reports, setReports] = useState([])
    useEffect(() => {
        setLoading(true)
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

        const getSupportRequest = async () => {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/request/findReport`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })

            const result = await response.json()
            console.log(result)
            setReports(result)
            // setUser(result.user)
        }

        getSupportRequest()
        setLoading(false)
        // setUser(result.user)
    }, [])

    return (
        <>
            {loading ? <LoadingComp /> : <div className='d-flex'>
                <AdminSidePaNel page={"admin-report"} />

                <div className='col-md-9 p-3 font-style-verdana'>
                    <NavTopProfile user={user} />
                    <div className='w-100 mt-3'>
                        <h3 className='w-100 text-center fw-bold font-style-verdana'>Report Received</h3>
                    </div>
                    <div className='w-100 mt-3 d-flex align-items-center justify-content-center'>
                        <div className='card w-75 p-4 border-0 rounded-5' style={{ backgroundColor: "#C2C0FF1F", height: "80vh", overflowY: "scroll" }}>
                            {
                                reports.map((report, index) => (
                                    <div className='card rounded-3 mb-3 border-0'>
                                        <div className='card-body'>
                                            <p>Subject : {report.subject}</p>
                                            <p>Email : {report.email}</p>
                                            <p>Description : {report.description}</p>
                                            <p>Attachements(if any)</p>
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>}


        </>
    )
}

export default AdminReportPage