import React from 'react';
import "./Loading.css";
import CircularProgress from '@mui/material/CircularProgress';


function Loading() {
    return (
        <div className='loading'>
            <div className='loading__contanier'>
                <CircularProgress color="success" />
                <h5>Working. . .</h5>
            </div>
        </div>
    )
}

export default Loading
