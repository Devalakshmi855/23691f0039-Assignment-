import React, { useEffect, useState } from 'react';
import { mockData } from '../api/mockData'; // Ensure correct import path
import './ProductList.css'; // Import the CSS file

const ProductList = ({ category }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simulate data fetching
        try {
            const data = mockData[category] || [];
            setProducts(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [category]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>{category} Products</h2>
            <div className="product-list">
                {products.map((product, index) => (
                    <div key={index} className="product-card">
                        <h3>{product.productName}</h3>
                        <p>Price: ${product.price}</p>
                        <p>Rating: {product.rating}</p>
                        <p>Discount: {product.discount}%</p>
                        <p>Availability: {product.availability}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
