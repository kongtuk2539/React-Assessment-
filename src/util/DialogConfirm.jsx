import React from 'react'

function DialogConfirm({ message, onConfirm, onCancel }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-300 bg-opacity-50">
            <div className="dark:bg-gray-800 dark:text-red-400 p-4 rounded-lg">
                <p className='font-semibold text-lg'>{message}</p>
                <div className="mt-4 flex justify-center">
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 mr-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
                    >
                        Confirm
                    </button>
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 bg-gray-300 text-gray-600 rounded hover:bg-gray-400 focus:outline-none"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DialogConfirm