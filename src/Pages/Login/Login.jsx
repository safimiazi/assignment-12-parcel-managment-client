import Lottie from "lottie-react";
import loginAnimation from "../../assets/login.json"
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import { toast } from "react-toastify";
const Login = () => {
    const {signInUser} = useAuth()
const [errorMessage, setError] = useState('')
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
        .then(result => {
            console.log(result.user);
            toast.success('login successfully')
        })
        .catch(error => {
            console.log(error.message);
            setError(error.message)
            toast.error(`${errorMessage}`)
        })
    }
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <Lottie animationData={loginAnimation}></Lottie>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm ">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-color">Login</button>
                            </div>
                        </form>
                        <div className="pl-10">
                            <p>new user? please <Link className="text-indigo-700" to="/register">register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;