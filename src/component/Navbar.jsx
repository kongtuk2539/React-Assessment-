import React from 'react'

function Navbar() {
    return (
        <div>
            <ul className='flex gap-5 font-bold justify-end p-5 border'>
                <li><a href="/">Home</a></li>
                <li><a href="/Owner">Owner</a></li>
            </ul>
        </div>
    )
}

export default Navbar