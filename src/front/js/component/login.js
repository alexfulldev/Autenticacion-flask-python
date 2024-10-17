import React, { useState } from "react";

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [login, setLogin] = useState(true); // Estado para alternar entre login y registro
    const [error, setError] = useState(null); // Estado para manejar errores

    // Maneja los cambios en los campos del formulario
   

    // Maneja el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        const msg = await actions.login(email,password)
        console.log(msg)
        setError(null);

        // try {
        //     const response = await fetch('https://humble-space-garbanzo-7v7j997q7q47fpwr7-3001.app.github.dev/admin/user/api/login', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             email: formData.email,
        //             password: formData.password,
        //         }),
        //     });

        //     if (!response.ok) {
        //         throw new Error('Invalid credentials');
        //     }

        //     const data = await response.json();
        //     const token = data.token; // Suponiendo que el token se devuelve en 'data.token'

        //     // Guarda el token en el localStorage o sessionStorage
        //     localStorage.setItem('token', token);

        //     // Redirigir al usuario o realizar alguna acción después del login exitoso
        //     console.log('Login successful! Token:', token);

        // } catch (error) {
        //     setError(error.message);
        // }
    };

    return (
        <div className="container d-flex align-items-center justify-content-center vh-100">
            <main className="form-signin text-center">
                <div className="logo mb-4">
                    <img
                        src="https://pbs.twimg.com/profile_images/1677095362752925696/y5KRnDyX_400x400.jpg"
                        alt="Logo de mi aplicación"
                    />
                </div>
                <h1 className="h3 mb-3 fw-normal">{login ? "Please sign in" : "Please register"}</h1>

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
                                    value={email}
                                    onChange={(e)=> setEmail(e.target.value)}
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
                                    value={password}
                                    onChange={(e)=> setPassword(e.target.value)}
                                />
                                <label htmlFor="floatingUsername">Username</label>
                            </div>
                        </>
                    )}

                    {error && <p style={{ color: 'red' }}>{error}</p>} {/* Muestra los errores */}

                    <button className="w-100 btn btn-lg btn-primary" type="submit">
                        {login ? 'Sign in' : 'Register'}
                    </button>

                    <p className="mt-3">
                        {login ? "Don't have an account?" : "Already have an account?"}
                        <span
                            style={{ cursor: 'pointer', color: 'blue' }}
                            onClick={() => setLogin(!login)} // Cambia entre login y registro
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
