
import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const Home = () => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [error, setError] = useState("");

    const handleAddItem = () => {
        if (inputValue.trim() === "") {
            setError("Item cannot be empty! plz add  item");
            return;
        }

        if (isEditing) {
            //Addition functionality Update the item
            const updatedItems = items.map((item, index) =>
                index === currentIndex ? inputValue : item
            );
            setItems(updatedItems);
            setIsEditing(false);
            setCurrentIndex(null);
        } else {
            //Addition functionality Add new items
            setItems([...items, inputValue]);
        }

        setInputValue("");
        setError("");
    };

    const handleRemoveItem = (index) => {
        const filteredItems = items.filter((_, i) => i !== index);
        setItems(filteredItems);
    };

    const handleRemoveAll = () => {
        setItems([]);
    };

    const handleEditItem = (index) => {
        setInputValue(items[index]);
        setIsEditing(true);
        setCurrentIndex(index);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-5">

            <header className="w-full bg-gray-800 text-white py-4 px-5 flex items-center justify-center md:justify-start">
                <div className="flex items-center max-w-7xl w-full">
                    <img
                        src="https://s.yimg.com/zb/imgv1/7cd2b3c3-d514-3b86-ac69-f6ee424e2a26/t_500x300"
                        alt="Logo"
                        className="h-8 w-8 mr-3"
                    />
                    <h1 className="text-2xl font-bold tracking-wide">Item List Manager</h1>
                </div>
            </header>


            <div className="w-full max-w-xl bg-white mt-10 p-6 rounded-lg shadow-lg md:max-w-2xl">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                    Item List
                </h2>


                <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Enter item"
                        className="flex-grow w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <button
                        onClick={handleAddItem}
                        className={`w-full md:w-auto px-6 py-3 rounded-md text-white font-semibold transition ${isEditing
                            ? "bg-blue-500 hover:bg-blue-600"
                            : "bg-green-500 hover:bg-green-600"
                            }`}
                    >
                        {isEditing ? "Save Changes" : "Add Item"}
                    </button>
                </div>

                {/* Validation Error section */}
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}


                {items.length > 0 ? (
                    <ul className="space-y-4">
                        {items.map((item, index) => (
                            <li
                                key={index}
                                className="flex justify-between items-center bg-gray-50 p-3 rounded-md shadow-sm hover:bg-gray-100 transition"
                            >
                                <span className="text-lg font-medium text-gray-700">
                                    {item}
                                </span>
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => handleEditItem(index)}
                                        className="text-blue-500 hover:underline font-medium"
                                    >
                                        <FaEdit />
                                    </button>
                                    <button
                                        onClick={() => handleRemoveItem(index)}
                                        className="text-red-500 hover:underline font-medium"
                                    >
                                        <FaTrashAlt />
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500 text-center font-medium">
                        No items yet here . Please Add your first item!
                    </p>
                )}

                {/* Addition functionality Remove All Button */}
                {items.length > 0 && (
                    <button
                        onClick={handleRemoveAll}
                        className="mt-6 w-full px-6 py-3 rounded-md text-white font-semibold bg-red-500 hover:bg-red-600"
                    >
                        Remove All
                    </button>
                )}
            </div>


        </div>
    );
};

export default Home;
