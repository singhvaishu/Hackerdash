

import React, { useState } from "react";

const Home = () => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleAddItem = () => {
        if (inputValue.trim() === "") return;
        setItems([...items, inputValue]);
        setInputValue("");
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-5">

            <header className="w-full bg-gray-800 text-white py-4 px-5 flex items-center justify-center md:justify-start">
                <div className="flex items-center max-w-7xl w-full">
                    <img
                        src="https://s.yimg.com/zb/imgv1/7cd2b3c3-d514-3b86-ac69-f6ee424e2a26/t_500x300"
                        alt="Logo"
                        className="h-8 w-8 mr-2"
                    />
                    <h1 className="text-xl font-bold text-green-500">Item List Manager</h1>
                </div>
            </header>

            <div className="w-full max-w-md bg-white mt-10 p-5 rounded-lg shadow md:max-w-lg lg:max-w-2xl">
                <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center md:text-left">
                    Item List
                </h2>


                <div className="mb-4">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Enter item"
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>


                <div className="mb-6">
                    <button
                        onClick={handleAddItem}
                        className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    >
                        Add Item
                    </button>
                </div>


                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    {items.map((item, index) => (
                        <li key={index} className="text-lg">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>


        </div>
    );
};

export default Home;
