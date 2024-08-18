import React from 'react';
import ProductList from './components/ProductList';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>Top Products Viewer</h1>
            <ProductList category="Laptop" />
            <ProductList category="Card" />
            {/* Add more ProductList components if needed */}
        </div>
    );
}

export default App;
