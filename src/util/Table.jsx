import React, { useState, useEffect } from 'react';
import LoadingComponent from './LoadingComponent';
import axios from 'axios';

function table({ isDelete, isPost, getData, deleteData, setShowDeleteConfirmDialog }) {
    const display = (isDelete === undefined ? true : isDelete);
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const itemsPerPage = 10; // Number of items per page
    const [currentPage, setCurrentPage] = useState(1);

    const fakeData = [
        {
            id: 1,
            name: "Tho",
            lastname: "Kongtuk",
            position: "attacking-midfielder "
        },
        {
            id: 2,
            name: "Zlatan",
            lastname: "Ibrahimović",
            position: "striker"
        },
        {
            id: 3,
            name: "Wayne",
            lastname: "Rooney",
            position: "Second-Striker"
        },
        {
            id: 4,
            name: "Bruno",
            lastname: "Fernandes",
            position: "attacking midfielder"
        },
    ]


    // Calculate the start and end indexes for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Slice the data array to get the items for the current page
    const currentData = data.slice(startIndex, endIndex);

    // Calculate the total number of pages
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Function to handle page navigation
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };



    useEffect(() => {

        const getData = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get('https://jsd5-mock-backend.onrender.com/members');
                setData([...fakeData, ...response.data]);
            } catch (error) {
                //
            } finally {
                setIsLoading(false); //
            }
        };

        getData();

    }, [isPost]);


    return (
        <div>
            <div>
                {isLoading ? (
                    <LoadingComponent />
                ) : (
                    // Render your data when isLoading is false
                    <div>
                        <div className='h-full mb-6'>
                            <table className="w-1/2 text-sm text-left text-gray-500 dark:text-gray-400 mt-20 mx-auto">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Last Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Position
                                        </th>
                                        <th scope="col" colSpan={2} className="px-6 py-3 col-span-2 text-center" hidden={display}>
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        currentData.map(item => {
                                            return (<tr key={item.id}
                                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" >
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {item.name}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {item.lastname}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {item.position}
                                                </td>
                                                <td className="px-6 py-4 text-red-600 hover:text-red-400" hidden={display}>
                                                    <a href="#" onClick={() => {
                                                        deleteData(item.id)
                                                        setShowDeleteConfirmDialog(true)
                                                    }}
                                                    >Delete</a>
                                                </td>
                                                <td className="px-6 py-4 text-green-600 hover:text-green-400" hidden={display}>
                                                    <a href="#" onClick={() => getData(item.id, item.name, item.lastname, item.position)}
                                                    >Update</a>
                                                </td>
                                            </tr>)
                                        })
                                    }
                                </tbody>
                            </table>
                            <div className="mt-4 flex justify-center">
                                {Array.from({ length: totalPages }).map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handlePageChange(index + 1)}
                                        className={`mx-2 p-2 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
                                            } hover:bg-blue-400`}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div >
    )
}

export default table