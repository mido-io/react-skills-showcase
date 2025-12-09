import React, { useState } from 'react'
import CustomModel from "./CustomModel"

const CustomModelCallingPage = () => {
    const [showModalPopup, setShowModalPopup] = useState(false);

    const handleToggleModelPopup = () => {
        setShowModalPopup(!showModalPopup);
    }

    function onClose() {
        setShowModalPopup(false);
    }

    return (
        <div className="flex flex-col items-center justify-center h-[50vh] space-y-6">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Modal Popup Demo</h1>
                <p className="text-gray-500 dark:text-gray-400">Click the button below to trigger the modal.</p>
            </div>

            <button
                onClick={handleToggleModelPopup}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg shadow-blue-500/30 transition-all hover:scale-105 active:scale-95"
            >
                Open Modal
            </button>

            {showModalPopup && (
                <CustomModel
                    title="Welcome Back!"
                    content={
                        <div className="space-y-4">
                            <p>This is a reusable modal component built with Tailwind CSS.</p>
                            <p>It features a backdrop blur, smooth animations, and dark mode support.</p>
                        </div>
                    }
                    footer={
                        <div className="flex justify-end gap-3">
                            <button
                                onClick={onClose}
                                className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={onClose}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md transition-colors"
                            >
                                Confirm
                            </button>
                        </div>
                    }
                    onClose={onClose}
                />
            )}
        </div>
    )
}

export default CustomModelCallingPage