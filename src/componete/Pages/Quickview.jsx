import React, { useState } from "react";

const Quickview = () => {

    const [visible, setVisible] = useState(5);

    const products = [
        { id: 1, name: "Elite Bundle", price: 499, image: "https://via.placeholder.com/150" },
        { id: 2, name: "Shadow Pack", price: 399, image: "https://via.placeholder.com/150" },
        { id: 3, name: "Warrior Set", price: 299, image: "https://via.placeholder.com/150" },
        { id: 4, name: "Ninja Skin", price: 599, image: "https://via.placeholder.com/150" },
        { id: 5, name: "Battle Suit", price: 349, image: "https://via.placeholder.com/150" },
        { id: 6, name: "Sniper Gear", price: 429, image: "https://via.placeholder.com/150" },
        { id: 7, name: "Dragon Armor", price: 489, image: "https://via.placeholder.com/150" },
        { id: 8, name: "Assassin Robe", price: 399, image: "https://via.placeholder.com/150" },
        { id: 9, name: "Desert Warrior", price: 379, image: "https://via.placeholder.com/150" },
        { id: 10, name: "Steel Knight", price: 559, image: "https://via.placeholder.com/150" },
    ];

    const showMore = () => setVisible(products.length);

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-6">Free Fire Shop</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.slice(0, visible).map((item) => (
                    <div key={item.id} className="bg-white shadow-md p-4 rounded-lg text-center">
                        <img src={item.image} alt={item.name} className="mx-auto mb-2 w-32 h-32 object-cover" />
                        <h2 className="text-lg font-semibold">{item.name}</h2>
                        <p className="text-gray-600">₹{item.price}</p>
                    </div>
                ))}
            </div>
            {visible < products.length && (
                <div className="text-center mt-6">
                    <button
                        onClick={showMore}
                        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        Show More
                    </button>
                </div>
            )}
        </div>
    );
};

export default Quickview;
