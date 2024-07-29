// App.js

import React, { useState, useEffect } from 'react';
import { getAllProducts, getProductById, getProductsByCategory } from '../src/Data';
import '../src/styles/App.css';

const App = () => {
    const [view, setView] = useState('home');
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getAllProducts();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    const handleCategoryChange = async (e) => {
        const selectedCategory = e.target.value;
        setCategory(selectedCategory);
        if (selectedCategory) {
            const data = await getProductsByCategory(selectedCategory);
            setProducts(data);
        } else {
            const data = await getAllProducts();
            setProducts(data);
        }
    };

    const handleCardClick = async (id) => {
        const data = await getProductById(id);
        setSelectedProduct(data);
        setView('details');
    };

    return (
        <div className="app">
            {view === 'home' && (
                <div className="home">
                    <h1>Product List</h1>
                    <select value={category} onChange={handleCategoryChange}>
                        <option value="">All Categories</option>
                        <option value="средний">Средний</option>
                    </select>
                    <div className="card-container">
                        {products.map(product => (
                            <div key={product.id} className="card" onClick={() => handleCardClick(product.id)}>
                                <img src={product.image} alt={product.name} />
                                <h2>{product.name}</h2>
                                <p>{product.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {view === 'details' && selectedProduct && (
                <div className="details">
                    <button onClick={() => setView('home')}>Back to Home</button>
                    <h1>{selectedProduct.name}</h1>
                    <img src={selectedProduct.image} alt={selectedProduct.name} />
                    <p>{selectedProduct.description}</p>
                </div>
            )}
            {view === 'error' && (
                <div className="error">
                    <h1>404 - Not Found</h1>
                    <p>The page you are looking for does not exist.</p>
                </div>
            )}
        </div>
    );
};

export default App;
