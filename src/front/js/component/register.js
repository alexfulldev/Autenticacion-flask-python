import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Register = () => {
    const { store, actions } = useContext(Context);
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
    });



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        actions.register(formData);

    };

    return (
        <div className="container d-flex align-items-center justify-content-center vh-100">
            <main className="form-signin text-center">
                <div className="logo mb-4">
                    <img src="https://pbs.twimg.com/profile_images/1677095362752925696/y5KRnDyX_400x400.jpg" alt="Logo de mi aplicación" />
                </div>
                <h1 className="h3 mb-3 fw-normal">Please Register</h1>

                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingName"
                            placeholder="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <label htmlFor="floatingName">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingUsername"
                            placeholder="Username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        <label htmlFor="floatingUsername">Username</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <button className="w-100 btn btn-lg btn-primary" type="submit">
                        register
                    </button>

                    <p className="mt-3">
                        No tienes una cuenta?
                        <Link
                            style={{ cursor: 'pointer', color: 'blue' }}
                            to="/login"
                        >
                            login
                        </Link>
                    </p>

                    <p className="mt-5 mb-3 text-muted">&copy; 2024</p>
                </form>
            </main>
        </div>
    );
};
