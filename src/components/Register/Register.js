import { Result } from 'postcss';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { UserContext } from '../../authContext/AuthContext';

const Register = () => {

    const { createUser, verification } = useContext(UserContext)

    const handleLogin = event => {

        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.pass.value
        console.log(name, email, password)

        createUser(email, password)
            .then(result => {

                const user = result.user;
                console.log(user)
                sendEmailVerification()

            })
            .catch(error => {

                console.log(error.message)

            })

        const sendEmailVerification = () => {

            verification()
                .then(toast.success('sent'))


        }



    }

    return (
        <div>
            <form onSubmit={handleLogin} className="hero min-h-screen bg-base-200 shadow-2xl">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='pass' className="input input-bordered" required />
                                <label className="label">
                                    {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;