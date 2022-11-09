import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const AddServices = () => {
    const { _id, title, price, description } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }

       

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    toast.success('Add reviews successfully')
                    form.reset();
                    
                }
            })
            .catch(error => toast.error(error.message))


    }
    return (
        <div>
        <form onSubmit={handlePlaceOrder}>
            <h1 className="text-4xl text-primary mt-3">This is Services Section</h1>
            <h2 className="text-4xl mt-3">You are hire to: {title}</h2>
            <h4 className="text-3xl">Price: {price}</h4>
            <p>{description}</p>
            <h1 className="text-4xl text-primary mt-5 mb-2">This is Review Section</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
               
                <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" />
                <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" />
                <input name="phone" type="text" placeholder="Your Phone" className="input input-ghost w-full  input-bordered" required />
                <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
            </div>
            <textarea name="message" className="textarea textarea-bordered h-24 w-full mt-2" placeholder="Your Message" required></textarea>

            <input className='btn' type="submit" value="Add his Review" />
        </form>
    </div>
    );
};

export default AddServices;