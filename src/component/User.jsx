import React, { useState } from 'react'
import Sector from './Sector'
import App from '../App.jsx'
import Tables from '../util/Table'

function User() {
    return (
        <App>
            <div>
                <div>
                    <h1 className='text-7xl font-bold mt-20 text-center'>Generation Thailand <br /> Home-User Sector</h1>
                    <Sector />
                    <Tables />
                </div>
            </div>
        </App>
    )
}

export default User