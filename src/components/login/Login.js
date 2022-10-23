
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../authContext/AuthContext';
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { signInWithEmail, forgetPass, googleSignIn, SignInFacebook, githubSignIin } = useContext(UserContext)
    const [email, setEmail] = useState()

    const gProvider = new GoogleAuthProvider()
    // const fbProvider = new FacebookAuthProvider()

    const navigate = useNavigate()
    const location = useLocation()


    const from = location?.state?.from?.pathname || '/'


    const handleLogin = (event) => {

        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.pass.value
        console.log(email, password)

        signInWithEmail(email, password)
            .then(result => {

                const user = result.user;
                console.log(user)
                toast.success('Login Success')
                navigate(from, { state: true })



            })
            .catch(error => {


                console.log(error)
                toast(error.message)

            })






    }
    const forget = (event) => {

        const email = event.target.value
        setEmail(email)



    }


    const sentResetMail = () => {


        forgetPass(email)
            .then(toast.success('reset mail has been sent to your mail address'))


    }

    const google = () => {


        googleSignIn(gProvider)
            .then(result => {

                const user = result.user;
                console.log(user)
                toast.success('user created')
                navigate(from, { state: true })



            })
            .catch(error => {


                console.log(error)



            })




    }

    const facebook = () => {


        SignInFacebook()
            .then(result => {

                const user = result.user;
                console.log(user)
                navigate(from, { state: true })

            })
            .catch(error => {


                console.log(error)



            })


    }

    const github = () => {


        githubSignIin()

            .then(result => {

                const user = result.user;
                console.log(user)
                navigate(from, { state: true })

            })
            .catch(error => {


                console.log(error)



            })


    }



    return (
        <div>
            <div className="hero min-h-screen bg-base-200 shadow-2xl">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input onBlur={forget} type="text" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='pass' className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="form-control mt-6 grid grid-cols-3 gap-0">
                            <div>
                                <button onClick={google} className="btn btn-circle btn-outline"><FaGoogle></FaGoogle></button>
                            </div>
                            <div>
                                <button onClick={facebook} className="btn btn-circle btn-outline"><FaFacebook></FaFacebook></button>
                            </div>
                            <div>
                                <button onClick={github} className="btn btn-circle btn-outline"><FaGithub></FaGithub></button>
                            </div>
                        </div>
                        <label className="label">
                            <button onClick={sentResetMail}><small>Forget passWord? </small></button>
                        </label>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;