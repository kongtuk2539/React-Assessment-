import React from 'react';

const Dialog = ({ message, showSuccessDialog, showErrorDialog }) => {

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-300 bg-opacity-50'>
            <div className="dialog text-center absolute p-4 rounded-lg">
                {showErrorDialog && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400
                w-96 h-auto font-semibold text-lg" role="alert">
                    <span className="font-medium">Danger alert!</span> <br /> {message}
                </div>}

                {showSuccessDialog && <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400
                w-96 h-auto font-semibold text-lg" role="alert">
                    <span className="font-medium">Success alert!</span> <br /> {message}
                </div>}
            </div>
        </div>
    );
};

export default Dialog;