import React, { useEffect, useState } from 'react';

const ReviewDetails = ({order,  handleDelete, handleStatusUpdate}) => {
    const { _id, serviceName, phone, customer, price, service, status } = order;
    const [orderService, setOrderService] = useState({})

    useEffect(() => {
        fetch(`https://photo-server-jet.vercel.app/pServices/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data));
    }, [service])


    return (
        <tr>
            <th>
                <label>
                    <div>  

                    {/* The button to open modal */}
<label htmlFor="my-modal-3" className="btn">Edit Review</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    
    <p className="py-4">Please edit your review</p>
  </div>
</div>
                    </div>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>Delete Review</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                orderService?.img && 
                                <img src={orderService.img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">${price}</span>
            </td>
            <td>Purple</td>
            <th>
                <button 
                 onClick={() => handleStatusUpdate(_id)}
                className="btn btn-ghost btn-xs">{status ? status : 'pending'}</button>
            </th>
        </tr>
    );
};

export default ReviewDetails;