import React from 'react';
import '../../css/output.css';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/Product/actions';

const FormContainer = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const category = form.category.value;
        const image = form.image.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        
        dispatch(addProduct({name, category, image, quantity, price, id:0}))
    }

    return (
        <div className="formContainer">
            <h4 className="formTitle">Add New Product</h4>
            <form className="space-y-4 text-[#534F4F]" id="lws-addProductForm" onSubmit={handleSubmit}>
                <div className="space-y-2">
                    <label htmlFor="lws-inputName">Product Name</label>
                    <input className="addProductInput" id="lws-inputName" type="text" name='name' required />
                </div>
                <div className="space-y-2">
                    <label htmlFor="lws-inputCategory">Category</label>
                    <input className="addProductInput" id="lws-inputCategory" type="text" name='category' required />
                </div>
                <div className="space-y-2">
                    <label htmlFor="lws-inputImage">Image Url</label>
                    <input className="addProductInput" id="lws-inputImage" type="text" name='image' required />
                </div>
                <div className="grid grid-cols-2 gap-8 pb-4">
                    <div className="space-y-2">
                        <label htmlFor="ws-inputPrice">Price</label>
                        <input className="addProductInput" type="number" id="lws-inputPrice" name='quantity' required />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="lws-inputQuantity">Quantity</label>
                        <input className="addProductInput" type="number" id="lws-inputQuantity" name='price' required />
                    </div>
                </div>
                <button type="submit" id="lws-inputSubmit" className="submit">Add Product</button>
            </form>
        </div>
    );
};

export default FormContainer;