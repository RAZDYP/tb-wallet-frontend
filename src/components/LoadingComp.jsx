import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
    return (
        <div className='w-100 d-flex align-items-center justify-content-center' style={{ height: "100vh" }}>
            <CircularProgress />
        </div>
    );
}