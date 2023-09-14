import React, { useState, useEffect } from 'react';
import App from '../App.jsx';
import Sector from './Sector';
import FormUser from './FormUser.jsx'
import Tables from '../util/Table';
import Dialog from '../util/Dialog';
import LoadingComponent from '../util/LoadingComponent';
import DialogConfirm from '../util/DialogConfirm';
import ValidForm from '../util/ValidateForm';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

function Admin() {
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);
    const [showErrorDialog, setShowErrorDialog] = useState(false);
    const [showDeleteConfirmDialog, setShowDeleteConfirmDialog] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [dialogMessage, setDialogMessage] = useState('');
    const [idForUpdate, setIdForUpdate] = useState('');
    const [dataForUpdate, setDataForUpdate] = useState('');
    const [idToDelete, setIdToDelete] = useState(null);
    const [isDelete, setIsDelete] = useState(false)
    const [isPost, setIsPost] = useState(false)
    const [isUpdate, setIsUpdate] = useState(false)

    const generateUUID = () => uuidv4();




    const postData = async (firstName, lastname, position) => {

        if (isUpdate) {
            putData(firstName, lastname, position);
        } else {
            const setDataUser = {
                id: generateUUID(),
                name: firstName,
                lastname: lastname,
                position: position
            }

            let isValid = true;

            for (const item in setDataUser) {
                const value = setDataUser[item]
                const isValidValue = !ValidForm(value);
                isValid = isValid && isValidValue;
            }


            if (isValid) {
                try {
                    setIsLoading(true)
                    const response = await axios.post(
                        'https://jsd5-mock-backend.onrender.com/members',
                        setDataUser
                    );

                    if (response.status === 200) {
                        setShowSuccessDialog(true);
                        setIsPost(!isPost)
                        setDialogMessage('Create was successful!');
                    }
                } catch (error) {
                    setShowErrorDialog(true);
                    setDialogMessage('An error occurred during the request.');
                } finally {
                    setIsLoading(false); //
                }
            } else {
                setShowErrorDialog(true);
                setDialogMessage('Please fill out all fields.');
            }

        }

    };

    const putData = async (firstName, lastname, position) => {

        const setDataUser = {
            id: idForUpdate,
            name: firstName,
            lastname: lastname,
            position: position
        }

        let isValid = true;

        for (const item in setDataUser) {
            const value = setDataUser[item]
            const isValidValue = !ValidForm(value);
            isValid = isValid && isValidValue;
        }


        if (isValid) {
            try {
                setIsLoading(true);
                const response = await axios.put(
                    'https://jsd5-mock-backend.onrender.com/members',
                    setDataUser
                );

                if (response.status === 200) {
                    setShowSuccessDialog(true);
                    setIsPost(!isPost)
                    setDialogMessage('Update was successful!');
                }
            } catch (error) {
                setShowErrorDialog(true);
                setDialogMessage('An error occurred during the request.');
            } finally {
                setIsLoading(false); //
            }
        } else {
            setShowErrorDialog(true);
            setDialogMessage('Please fill out all fields.');
        }

        setDataForUpdate('')
        setIdForUpdate('')
        setIsUpdate(false)

    };

    const getData = (id, firstName, lastname, position) => {
        const setDataUser = {
            id: id,
            name: firstName,
            lastname: lastname,
            position: position
        }

        setDataForUpdate(setDataUser)
        setIdForUpdate(setDataUser.id)
        setIsUpdate(true)
    }

    const handleDelete = async (id) => {
        try {
            setIsLoading(true);
            const response = await axios.delete(
                `https://jsd5-mock-backend.onrender.com/member/${id}`
            );

            if (response.status === 200) {
                setShowSuccessDialog(true);
                setIsPost(!isPost)
                setDialogMessage('Delete was successful!');
            }
        } catch (error) {
            setShowErrorDialog(true);
            setDialogMessage('An error occurred during the request.');
        } finally {
            setIsLoading(false); //
        }
    }

    const deleteData = (id) => {
        setIdToDelete(id)
    }

    const handleConfirmDelete = () => {
        if (idToDelete !== null) {
            handleDelete(idToDelete)
            setIdToDelete('')
        }
        setShowDeleteConfirmDialog(false);
    };

    const handleCancelDelete = () => {
        setShowDeleteConfirmDialog(false);
    };

    useEffect(() => {
        // Show success dialog for 3 seconds
        if (showSuccessDialog) {
            setTimeout(() => {
                setShowSuccessDialog(false);
                setDialogMessage(''); // Clear the message after hiding
            }, 3000);
        }

        // Show error dialog for 3 seconds
        if (showErrorDialog) {
            setTimeout(() => {
                setShowErrorDialog(false);
                setDialogMessage(''); // Clear the message after hiding
            }, 3000);
        }

    }, [showSuccessDialog, showErrorDialog]);

    return (
        <App>
            <div>
                {isLoading ? (
                    <LoadingComponent />
                ) : (
                    <div>
                        <div>
                            {showSuccessDialog && <Dialog message={dialogMessage} showSuccessDialog={showSuccessDialog} />}
                            {showErrorDialog && <Dialog message={dialogMessage} showErrorDialog={showErrorDialog} />}
                        </div>
                        <h1 className='text-7xl font-bold mt-20 text-center'>Generation Thailand <br /> Home-Admin Sector</h1>
                        <Sector />
                        <FormUser postData={postData} dataForUpdate={dataForUpdate} />
                        <Tables isDelete={isDelete} isPost={isPost} getData={getData} deleteData={deleteData} setShowDeleteConfirmDialog={setShowDeleteConfirmDialog} />
                        <div>
                            {showDeleteConfirmDialog && (
                                <DialogConfirm
                                    message="Are you sure you want to delete this user?"
                                    onConfirm={handleConfirmDelete}
                                    onCancel={handleCancelDelete}
                                />
                            )}
                        </div>
                    </div>
                )}
            </div>
        </App>
    )
}


export default Admin