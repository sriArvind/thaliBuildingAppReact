import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../slices/checkoutSlice';


const ItemThali = ({ item }) => {

    const [quantity, setQuantity] = useState(1);

    const [isItemAdded, setIsItemAdded] = useState(false);

    const dispatch = useDispatch();


    const handleAddItem = () => {
        dispatch(addItem({ item, quantity }));
        setIsItemAdded(true);
    }


    const handleRemoveItem = () => {
        dispatch(removeItem(item));
        setIsItemAdded(false);
        setQuantity(1);
    }


    const handleSelect = (event) => {
        setQuantity(Number(event.target.value));
    }


    return (

        <div className='container w-50 d-flex p-3 my-3 border rounded shadow'>

            <div className='w-25 d-flex justify-content-center align-items-center'>
                <p className='m-0 fs-6'>{item.id}</p>
            </div>

            <div className='w-25 d-flex justify-content-center align-items-center'>
                <p className='m-0 fs-6'>{item.itemName}</p>
            </div>

            <div className='w-25 d-flex justify-content-center align-items-center'>
                <select
                    className='form-select w-50'
                    onChange={handleSelect}
                    value={quantity}
                >

                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>

                </select>
            </div>

            <div className='w-25 d-flex justify-content-center align-items-center'>
                {
                    isItemAdded ?

                        <button className='btn btn-outline-danger' onClick={handleRemoveItem}>
                            Remove Item
                        </button>

                        :

                        <button className='btn btn-outline-success' onClick={handleAddItem}>
                            Add Item
                        </button>

                }
            </div>

        </div>

    );

};


export default ItemThali;