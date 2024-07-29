// data.js

export const BASE_URL = 'https://cars-pagination.onrender.com';

export const getAllProducts = async () => {
    const response = await fetch(`${BASE_URL}/products`);
    const data = await response.json();
    return data;
};

export const getProductById = async (id) => {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    const data = await response.json();
    return data;
};

export const getProductsByCategory = async (category) => {
    const response = await fetch(`${BASE_URL}/products/category?category=${category}`);
    const data = await response.json();
    return data;
};
