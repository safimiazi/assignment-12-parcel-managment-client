import Lottie from 'lottie-react';
import React, { useState } from 'react';
import registerAnimation from '../../assets/registerAnimation.json'
import useAuth from '../../Hooks/useAuth';
const Register = () => {
    const [selectedValue, setSelectedValue] = useState('')
    const {createUser} = useAuth()

    const handleSelectedChange = (e) =>{
        setSelectedValue(e.target.value);
    }

    const handleCreateUser = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email, password, selectedValue);

        createUser(email, password)
        .then(res => {
        console.log(res.user);
        form.reset()
        })
        .catch( error => {
            console.log(error.message);
        })
    }
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <Lottie animationData={registerAnimation}></Lottie>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm ">
                        <form onSubmit={handleCreateUser} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">user type</span>
                                </label>
                                <select onChange={handleSelectedChange} className="select w-full max-w-xs">
                                    <option disabled selected>select type of user</option>
                                    <option value="user">Normal User</option>
                                    <option value="deliveryMan">Delivery Men</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button  className="btn btn-color">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;