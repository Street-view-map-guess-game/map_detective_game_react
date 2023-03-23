import React from 'react';

const Alert = ({ type, title, message }) => {
    let backgroundColor = "bg-gray-100";
    let borderColor = "border-gray-300";
    let textColor = "text-gray-700";

    if (type === "error") {
        backgroundColor = "bg-red-500";
        borderColor = "border-red-600";
        textColor = "text-white";
    } else if (type === "success") {
        backgroundColor = "bg-green-500";
        borderColor = "border-green-600";
        textColor = "text-white";
    } else if (type === "warning") {
        backgroundColor = "bg-yellow-500";
        borderColor = "border-yellow-600";
        textColor = "text-gray-800";
    }
    console.log(type, title, message)
    return (
        <div id='Alert' className="flex justify-center items-center h-screen" style={{ zIndex: 20 }}>
            <div className={`border p-4 rounded-lg ${backgroundColor} ${borderColor}`}>
                <div className={`font-bold text-lg mb-2 ${textColor}`}>{title}</div>
                <p className={`${textColor} text-base`}>{message}</p>
            </div>
        </div>
    );
};

export default Alert;