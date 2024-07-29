// import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// import '../styles/Home.css';

// function Home({ onPageChange }) {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('');

//   useEffect(() => {
//     fetchProducts();
//     fetchCategories();
//   }, []);

//   const fetchProducts = async (category = '') => {
//     const response = await axios.get(`https://cars-pagination.onrender.com/products${category && `/category?category=${category}`}`);
//     setProducts(response.data);
//   };

//   const fetchCategories = async () => {
//     const response = await axios.get('https://cars-pagination.onrender.com/categories');
//     setCategories(response.data);
//   };

//   const handleCategoryChange = (e) => {
//     const category = e.target.value;
//     setSelectedCategory(category);
//     fetchProducts(category);
//   };

//   const handleProductClick = (product) => {
//     onPageChange('details', product);
//   };

//   return (
//     <div className="home">
//       <h1>Products</h1>
//       <select value={selectedCategory} onChange={handleCategoryChange}>
//         <option value="">All Categories</option>
//         {categories.map((category, index) => (
//           <option key={index} value={category}>{category}</option>
//         ))}
//       </select>
//       <div className="product-cards">
//         {products.map(product => (
//           <div key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
//             <img src={product.image} alt={product.name} />
//             <h2>{product.name}</h2>
//             <p>{product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;
