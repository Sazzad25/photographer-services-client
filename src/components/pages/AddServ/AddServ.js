import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import ServDetails from '../AddServ/ServDetails.js';

const AddServ = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([])


    useEffect( () =>{
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [user?.email])

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if(proceed){
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE',
                
            })
            .then(res => res.json())
            .then(data => {
        
                if (data.deletedCount > 0){
                    toast.success('deleted successfully');
                    const remaining = orders.filter(odr => odr._id !== id);
                    setOrders(remaining);
                }
            })
        }
    }

    const handleStatusUpdate = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PATCH', 
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({status: 'Approved'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0) {
                const remaining = orders.filter(odr => odr._id !== id);
                const approving = orders.find(odr => odr._id === id);
                approving.status = 'Approved'

                const newOrders = [approving, ...remaining];
                setOrders(newOrders);
            }
            
        })
    }

    return (
        <div>
        <h2 className="text-5xl">You have {orders.length} Reviews</h2>
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                        orders.map(order => <ServDetails
                            key={order._id}
                            order={order}
                            handleDelete={handleDelete}
                            handleStatusUpdate={handleStatusUpdate}
                        ></ServDetails>)
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default AddServ;