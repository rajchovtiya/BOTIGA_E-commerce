import React, { useRef, useState } from 'react';

const product = {
    name: 'Smartphone XYZ - 128GB, 6GB RAM',
    price: 349.99,
    description:
        'Experience blazing-fast performance and a vibrant display with the new Smartphone XYZ. Equipped with 128GB storage and 6GB RAM, perfect for multitasking and media.',
    images: [
        './img/botal1.webp',
        './img/botal2.webp',
        './img/botal3.webp',
        './img/botal4.webp'
    ]
};

export default function QuickView() {
    const [selectedImg, setSelectedImg] = useState(product.images[0]);
    const [fade, setFade] = useState(false);
    const thumbnailRef = useRef(null);
    const imgRefs = useRef([]);

    const handleAddToCart = () => {
        localStorage.setItem('selectedProduct', JSON.stringify(product));
        alert('Product added to cart!');
    };

    const scrollToThumb = (index) => {
        setFade(true);
        setTimeout(() => {
            setSelectedImg(product.images[index]);
            setFade(false);
        }, 150); // Short fade delay

        if (imgRefs.current[index]) {
            imgRefs.current[index].scrollIntoView({
                behavior: 'smooth',
                inline: 'center',
                block: 'nearest'
            });
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-6 mt-16 flex flex-col lg:flex-row gap-10 bg-white rounded-lg shadow-lg border">
            {/* Thumbnails */}
            <div
                ref={thumbnailRef}
                className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto max-h-96 max-w-full lg:max-w-[100px] scroll-smooth"
            >
                {product.images.map((img, index) => (
                    <img
                        key={index}
                        ref={(el) => (imgRefs.current[index] = el)}
                        src={img}
                        alt={`thumb-${index}`}
                        onClick={() => scrollToThumb(index)}
                        className={`w-20 h-20 object-cover border rounded cursor-pointer flex-shrink-0 ${selectedImg === img ? 'ring-2 ring-yellow-500' : ''
                            }`}
                    />
                ))}
            </div>

            {/* Main Image with animation */}
            <div className="flex-1 flex items-center justify-center">
                <img
                    src={selectedImg}
                    alt="Selected"
                    className={`w-full h-[400px] object-contain border rounded transition-opacity duration-1000 ${fade ? 'left-[-100%]' : 'left-0'
                        }`}
                />
            </div>

            {/* Product Info */}
            <div className="flex-1 space-y-4">
                <h1 className="text-2xl font-semibold">{product.name}</h1>
                <p className="text-xl text-red-600 font-bold">${product.price.toFixed(2)}</p>
                <p className="text-gray-600">{product.description}</p>
                <button
                    onClick={handleAddToCart}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded"
                >
                    Add to Cart
                </button>

                {/* Download Button */}
                <a
                    href={selectedImg}
                    download
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded inline-block mt-2"
                >
                    Download Image
                </a>
            </div>
        </div>
    );
}
