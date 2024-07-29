// import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// import '../styles/Details.css';

// function Details({ product, onPageChange }) {
//   const [productDetails, setProductDetails] = useState(null);

//   useEffect(() => {
//     fetchProductDetails();
//   }, [product]);

//   const fetchProductDetails = async () => {
//     const response = await axios.get(`https://cars-pagination.onrender.com/products/${product.id}`);
//     setProductDetails(response.data);
//   };

//   if (!productDetails) return <div>Loading...</div>;

//   return (
//     <div className="details">
//       <button onClick={() => onPageChange('home')}>Back</button>
//       <h1>{productDetails.name}</h1>
//       <img src={productDetails.image} alt={productDetails.name} />
//       <p>{productDetails.description}</p>
//       <p>Price: {productDetails.price}</p>
//     </div>
//   );
// }

// export default Details;
