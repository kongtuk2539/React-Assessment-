import React from 'react'
import Sector from './Sector'
import App from '../App.jsx'

function Home() {
    return (
        <App>
            <div>
                <div>
                    <h1 className='text-7xl font-bold mt-40 text-center'>Generation Thailand <br /> React - Assessment</h1>
                    <Sector />
                </div>
            </div>
        </App>
    )
}

export default Home