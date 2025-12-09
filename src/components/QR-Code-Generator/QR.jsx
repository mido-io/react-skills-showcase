import React, { useState } from 'react'
import QRCode from "react-qr-code";
import { FaQrcode, FaDownload } from "react-icons/fa";

const QR = () => {
    const [qrCode, setQrCode] = useState("");
    const [input, setInput] = useState("")

    const handleGenerateQr = () => {
        setQrCode(input)
        setInput("")
    }

    return (
        <div className="flex flex-col items-center justify-center space-y-8 w-full max-w-md mx-auto">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center justify-center gap-3">
                    <FaQrcode className="text-blue-600" />
                    QR Generator
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                    Enter text or URL to generate a QR code instantly.
                </p>
            </div>

            <div className="w-full space-y-4">
                <div className="relative">
                    <input
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                        type="text"
                        placeholder="Enter value here..."
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                </div>
                <button
                    onClick={handleGenerateQr}
                    disabled={!input.trim()}
                    className="w-full py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 dark:disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-semibold transition-colors shadow-lg shadow-blue-500/30 disabled:shadow-none"
                >
                    Generate QR Code
                </button>
            </div>

            {qrCode && (
                <div className="p-6 bg-white rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 animate-in zoom-in duration-300">
                    <div className="bg-white p-4 rounded-xl">
                        <QRCode
                            size={200}
                            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                            value={qrCode}
                            viewBox={`0 0 256 256`}
                        />
                    </div>
                    <p className="mt-4 text-center text-sm text-gray-500 break-all max-w-[200px]">
                        {qrCode}
                    </p>
                </div>
            )}
        </div>
    )
}

export default QR
