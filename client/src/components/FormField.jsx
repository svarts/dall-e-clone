import React from 'react';

const FormField = ({labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe,}) => (
    <div>
        <div className="flex items-center gap-2 mb-2">
            <label
                htmlFor={name}
                className="block text-sm font-medium text-gray-900"
            >
                {labelName}
            </label>
            {isSurpriseMe && (
                <button
                    type="button"
                    onClick={handleSurpriseMe}
                    className="font-semibold text-xs bg-gradient-to-r from-indigo-300 via-indigo-500 to-indigo-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 shadow-lg shadow-indigo-500/50 dark:shadow-lg dark:shadow-indigo-800/80 py-1 px-2 rounded-[5px] text-white"
                >
                    Surprise me
                </button>
            )}
        </div>
        <input
            type={type}
            id={name}
            name={name}
            className="bg-gray-50 border border-gray-300 label-text text-sm rounded-lg focus:ring-[#ba6bff] focus:border-[#ba6bff] outline-none block w-full p-3"
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            required
        />
    </div>
);

export default FormField;