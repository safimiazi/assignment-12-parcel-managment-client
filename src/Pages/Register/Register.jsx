import Lottie from 'lottie-react';
import React, { useState } from 'react';
import registerAnimation from '../../assets/registerAnimation.json'
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { Link, useNavigate } from 'react-router-dom';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const Register = () => {
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    const [selectedValue, setSelectedValue] = useState('')
    const { createUser, userUpdate } = useAuth()
    const [errorMessage, setError] = useState('')
    const [selectedFile, setSelectedFile] = useState(null);


const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0])
}

    const handleSelectedChange = (e) => {
        setSelectedValue(e.target.value);
    }

    const handleCreateUser = async(e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password, selectedValue);





        try {
         
            const formData = new FormData();
            formData.append('image', selectedFile);
      
            const response = await fetch(`${image_hosting_api}`, {
              method: 'POST',
              body: formData,
            });
      
            if (response.ok) {
              const result = await response.json();
              console.log('Image uploaded successfully:', result.data);
             
                const  photoFile = result.data.display_url
             
              if(result.data){
                 
                 




        // const specialChar = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
        // if(password.length < 6){
        //     toast.error("password must be 6 characters long")
        // }else if(!/[A-Z]/.test(password)) {
        //     toast.error("password must contain 1 capital letter")
        // }else if(!specialChar.test(password)){
        //     toast.error("password must contain 1 special character")
        // }

        const userInfo = {
            name: name,
            email: email,
            photo: photoFile,
            role: selectedValue,
            userId : Math.floor(10000000 + Math.random() * 90000000)

        }
console.log(userInfo);
        createUser(email, password)
            .then(res => {
                console.log(res.user);
                toast.success("successfully registered")
                
                axiosPublic.post('/create-user',userInfo)
                .then(res => {
                    console.log(res.data);
                    if(res.data.insertedId){
                    
                        userUpdate(name, photoFile)
                        .then(result => {
                            console.log(result?.user);

                            toast.success("successfully registered")
                            navigate("/")
                            
                        })
                        .catch(error => {
                            console.log(error.message);
                        })
                        form.reset()
                    }
                })
                .catch(error => {
                    console.log(error.message);
                })


            })
            .catch(error => {
                console.log(error.message);
                setError(error.message)
                toast.error(`${errorMessage}`)
            })


                

              }   
            } else {
              console.error('Failed to upload image:', response.statusText);
            }
          } catch (error) {
            console.error('Error during image upload:', error.message);
          }





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
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input type="file" required onChange={handleFileChange} className="file-input file-input-bordered w-full max-w-xs" />
                                {/* <input name='photo' type="text" placeholder="photo" className="input input-bordered" required /> */}
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
                                <button className="btn btn-color">Register</button>
                            </div>
                        </form>
                        <div className='md:pl-14 pl-2'>
                            <SocialLogin></SocialLogin>
                            <p>already register? please <Link to="/login"><span className='text-indigo-800 underline'>login</span></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;