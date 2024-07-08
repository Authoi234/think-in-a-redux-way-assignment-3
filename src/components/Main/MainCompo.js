import React from 'react';
import ProductContainer from './ProductContainer';
import FormContainer from './FormContainer';

const MainCompo = () => {
    return (
        <main className="py-16">
            <div className="productWrapper">
                <ProductContainer></ProductContainer>
                <div>
                    <FormContainer></FormContainer>
                </div>
            </div>
        </main>
    );
};

export default MainCompo;