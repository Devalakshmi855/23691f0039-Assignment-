import axios from 'axios';

// Define the base URL for API requests
const BASE_URL = 'http://20.244.56.144/test/companies';

// Fetch top products from the API
export const fetchTopProducts = async (company, category, topN, minPrice, maxPrice) => {
    try {
        const response = await axios.get(`${BASE_URL}/${company}/categories/${category}/products/top-${topN}?minPrice=${minPrice}&maxPrice=${maxPrice}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error.message || error);
        throw error;
    }
};
const mockData = {
    Laptop: [
        {
            productName: "Laptop 1",
            price: 2236,
            rating: 4.7,
            discount: 63,
            availability: "yes"
        },
        {
            productName: "Laptop 2",
            price: 1244,
            rating: 4.5,
            discount: 45,
            availability: "out-of-stock"
        },
        // Add more laptop mock data as needed
    ],
    Card: [
        {
            productName: "Graphics Card X1",
            price: 499,
            rating: 4.8,
            discount: 20,
            availability: "yes"
        },
        {
            productName: "Graphics Card X2",
            price: 699,
            rating: 4.6,
            discount: 15,
            availability: "yes"
        },
        {
            productName: "Motherboard Card M1",
            price: 150,
            rating: 4.3,
            discount: 10,
            availability: "out-of-stock"
        },
        // Add more card mock data as needed
    ]
};

// Fetch mock products based on category
export const getMockProducts = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockData[category] || []);
        }, 1000);
    });
};

