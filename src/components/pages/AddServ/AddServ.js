import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import ServDetails from '../AddServ/ServDetails';

const  AddServ = () => {
    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([])
    useTitle('My Reviews')


    useEffect( () =>{
        fetch(`https://photo-server-jet.vercel.app/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('photoToken')}`
            }
        })
        .then(res => {
            if(res.status === 401 || res.status === 403){
                return logOut();
            }
            return res.json()
        })
        .then(data => {
            setOrders(data);
        })
    }, [user?.email, logOut])

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if(proceed){
            fetch(`https://photo-server-jet.vercel.app/orders/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('photoToken')}`
                }
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
        fetch(`https://photo-server-jet.vercel.app/orders/${id}`, {
            method: 'PATCH', 
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('photoToken')}`
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
            <h2 className="text-5xl">You have {orders.length} Services</h2>
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