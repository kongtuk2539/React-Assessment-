import React, { useState, useEffect } from 'react'

function FormUser({ postData, dataForUpdate }) {
    const [firstName, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [position, setPosition] = useState('');


    useEffect(() => {
        if (dataForUpdate !== '') {
            setFirstName(dataForUpdate.name);
            setLastName(dataForUpdate.lastname);
            setPosition(dataForUpdate.position);
        }

    }, [dataForUpdate]);



    return (
        <div>
            <div className='flex justify-center items-end gap-6 h-16 w-auto mt-6'>
                <div>
                    <h1 className='mb-2 font-medium'>
                        Create User or Update Here
                    </h1>
                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
                        placeholder="First Name" required />
                </div>
                <div>
                    <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={e => setLastName(e.target.value)}
                        value={lastname}
                        placeholder="Last Name" required />
                </div>
                <div>
                    <input type="text" id="position" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={e => setPosition(e.target.value)}
                        value={position}
                        placeholder="Position" required />
                </div>
                <div>
                    <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white 
                    rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 
                    focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 
                    dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        onClick={() => {
                            postData(firstName, lastname, position)
                            setFirstName('');
                            setLastName('');
                            setPosition('');
                        }}>
                        Save</button>
                </div>
            </div>
        </div>
    )
}

export default FormUser