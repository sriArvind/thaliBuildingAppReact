import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearCheckedItems } from '../../slices/checkoutSlice';
import ItemThali from '../ItemThali/ItemThali';


const Thali = () => {

    const dispatch = useDispatch();

    const initialData = useSelector((state) => state.checkout.initialData);

    const checkedItems = useSelector((state) => state.checkout.checkedItems);

    const navigate = useNavigate();

    const [warning, setWarning] = useState(false);


    useEffect(() => {

        dispatch(clearCheckedItems());

    }, [dispatch]);


    const handleCheckout = () => {

        if (checkedItems.length < 2) {
            setWarning(true);
        }
        else {
            setWarning(false);
            navigate('/checkout');
        }

    };


    return (

        <div className='container my-3'>

            <h3 className="text-center text-primary">
                Dear Customer, Customize Your Thali !
            </h3>

            <div className='d-flex flex-wrap justify-content-center'>

                {
                    checkedItems.map((item, index) => {
                        return (
                            <img
                                key={index}
                                className='img-thumbnail m-3 shadow-lg'
                                src={item.itemImage}
                                alt={item.itemName}
                                width='180px'
                                height='180px'
                            />
                        );
                    })
                }

            </div>

            <div>

                {initialData.map((item, index) =>

                    <ItemThali key={index} item={item} />

                )}

            </div>

            {
                warning ?
                    <div className="alert alert-danger w-50 mx-auto">
                        <h6 className='m-0 text-center'>Please select minimum two items before checkout</h6>
                    </div>
                    :
                    null
            }

            <button
                className='d-block mx-auto my-5 btn btn-outline-primary'
                onClick={handleCheckout}
            >
                Checkout
            </button>

        </div>

    );

};


export default Thali;