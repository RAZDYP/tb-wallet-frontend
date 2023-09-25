import React, { useEffect, useState } from "react";

const Logout = () => {

    const [timer, setTimer] = useState(10)

    useEffect(() => {
        localStorage.removeItem('token')
        localStorage.removeItem('email')

        setTimeout(() => {
            window.location.href = '/login'
        }, 10000)

        setInterval(() => {
            setTimer(timer - 1)
        }, 1000)

    }, [timer])

    return (
        <>
            {/* logging out in 10 seconds */}
            <div className='d-flex align-items-center justify-content-center' style={{ height: "100vh" }}>
                <h1 className='text-center'>Logging out in {timer} seconds...</h1>
            </div>
        </>
    )
}

export default Logout;