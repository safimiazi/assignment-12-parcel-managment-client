import { BsGithub, BsGoogle } from "react-icons/bs";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import { useState } from "react";

const SocialLogin = () => {
    const { signInWithGoogle, signInWithGithub, } = useAuth()
    const [errorMessage, setError] = useState('')

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result.user);
            toast.success("successfully Google Login")
        })
        .catch(error => {
            console.log(error.message);
            setError(error.message)
            toast.error(`${errorMessage}`)
        })
    }

    const handleSignInWithGithub = () => {
        signInWithGithub()
        .then(result => {
            console.log(result.user);
            toast.success("successfully Github Login")

        })
        .catch(error => {
            console.log(error.message);
            setError(error.message)
            toast.error(`${errorMessage}`)

        })
    }
    return (
        <div className="flex gap-5 items-center">
            <div>
                <button onClick={handleSignInWithGoogle} className="btn">
                    Google
                    <div className="badge"><BsGoogle className="text-xl"></BsGoogle></div>
                </button>
            </div>
            <div>
                <button onClick={handleSignInWithGithub} className="btn">
                    Github
                    <div className="badge"><BsGithub className="text-xl"></BsGithub></div>
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;