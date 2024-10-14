import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Register = () => {
    const { store, actions } = useContext(Context);
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
    });
    const [login, setLogin] = useState(true);

    // Actualiza el estado cuando el usuario cambia algún campo del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Maneja el envío del formulario para login o registro
    const handleSubmit = (e) => {
        e.preventDefault();
        if (login) {
            actions.login(formData);  // Asegúrate de que `actions.login` esté implementado correctamente
        } else {
            actions.register(formData); // Asegúrate de que `actions.register` esté implementado correctamente
        }
    };

    return (
        <div className="container d-flex align-items-center justify-content-center vh-100">
            <main className="form-signin text-center">
                <div className="logo mb-4">
                    <img src="https://pbs.twimg.com/profile_images/1677095362752925696/y5KRnDyX_400x400.jpg" alt="Logo de mi aplicación" />
                </div>
                <h1 className="h3 mb-3 fw-normal">Please {login ? 'Login' : 'Register'}</h1>

                <form onSubmit={handleSubmit}>
                    {!login && (
                        <>
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
                        </>
                    )}
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
                        {login ? 'Sign in' : 'Register'}
                    </button>

                    <p className="mt-3">
                        {login ? "No tienes una cuenta?" : "Ya tienes una cuenta?"} 
                        <span 
                            style={{ cursor: 'pointer', color: 'blue' }} 
                            onClick={() => setLogin(!login)}
                        >
                            {login ? ' Register' : ' Login'}
                        </span>
                    </p>

                    <p className="mt-5 mb-3 text-muted">&copy; 2024</p>
                </form>
            </main>
        </div>
    );
};
