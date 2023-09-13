import React from 'react'
import App from '../App.jsx'

function Owner() {
    return (
        <App>
            <div className='flex flex-col justify-center items-center mt-6'>
                <h1 className='text-4xl font-medium text-center mb-4'>Tho-Group H-56</h1>
                <img src="https://singersroom.com/wp-content/uploads/2023/05/Stevie-Ray-Vaughan-Top-Songs.jpg"
                    className='w-96' />
                <div className='mt-4 flex flex-col justify-center items-center'>
                    <h4 className='mb-4 text-2xl'>Short Biography:</h4>
                    <p className='w-3/4 text-base'>
                        Hello, my name is Tho, born and raised in Bangkok, Thailand.
                        I'm 27 years old. Currently,
                        I don't have a job and would like to work in the software development field.
                        I'm training intensively and have been given the opportunity to learn in Bootcamp Generation Thailand.
                        However, my true passion is playing the guitar.
                        I really admire the artist Stevie Ray Vaughan and aspire to be like him. Finally,
                        it's nice to meet you.
                    </p>
                </div>
            </div>
        </App>
    )
}

export default Owner