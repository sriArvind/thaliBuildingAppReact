import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';


const Checkout = () => {

    const checkedItems = useSelector((state) => state.checkout.checkedItems);

    const [warning, setWarning] = useState(false);


    let totalBillAmount = checkedItems.reduce((sum, item) => {
        return (sum + (item.quantity * item.unitPrice));
    }, 0);


    useEffect(() => {

        if (checkedItems.length < 2) {
            setWarning(true);
        }
        else {
            setWarning(false);
        }

    }, [checkedItems.length]);


    return (

        <div className='container my-3'>

            {
                warning ?

                    <div className='my-5'>

                        <h2 className='text-center text-info'>
                            Dear Customer, <br /><br />
                            Please select minimum two items to see the order summary!
                        </h2>

                    </div>

                    :

                    <div className='table-responsive w-75 mx-auto'>

                        <h3 className='text-center text-success'>
                            Order Summary
                        </h3>

                        <table className='table my-3 text-center align-middle'>

                            <thead className='table-dark'>
                                <tr>
                                    <th>#</th>
                                    <th>Item</th>
                                    <th>Item Name</th>
                                    <th>Unit Price</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    checkedItems.map((item, index) => {

                                        return (

                                            <tr key={item.id}>

                                                <td>{(index + 1)}</td>

                                                <td>
                                                    <img
                                                        className='img-thumbnail'
                                                        src={item.itemImage}
                                                        alt={item.itemName}
                                                        width='60px'
                                                        height='60px'
                                                    />
                                                </td>

                                                <td>{item.itemName}</td>

                                                <td>{item.unitPrice}</td>

                                                <td>{item.quantity}</td>

                                                <td>{(item.quantity * item.unitPrice)}</td>

                                            </tr>

                                        )

                                    })
                                }

                            </tbody>

                            <tfoot className='table-dark'>
                                <tr>
                                    <th colSpan='5'>Total Bill Ammount</th>
                                    <th>{totalBillAmount}</th>
                                </tr>
                            </tfoot>

                        </table>

                        <h3 className='text-center text-primary'>
                            Thank You! Visit Again!
                        </h3>

                    </div>

            }

        </div>

    );

};


export default Checkout;