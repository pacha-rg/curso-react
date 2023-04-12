import React from 'react';
import Header from '@components/Header.jsx';
import ProductList from '@containers/ProductList';

const Home = () => {
    return (
        <>
            <Header />
            <ProductList />
        </>
    );
}

export default Home;