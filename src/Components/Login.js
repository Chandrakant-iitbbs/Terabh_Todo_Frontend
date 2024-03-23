import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [EmailPassword, setEmailPassword] = useState({
        email: "",
        password: "",
    });

    const onChange = (e) => {
        setEmailPassword({ ...EmailPassword, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = EmailPassword; // destructuring
        const url = "http://127.0.0.1:8000/login";
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }), // destructuring
            });
            const res = await response.json();
            localStorage.setItem("token", res);
            alert("login Successfully");
            navigate("/");        // redirect into "/" path
        }
        catch (err) {
            alert("Please Enter correct email id and password");
            setEmailPassword({ email: "", password: "" })
        }
    };

    let navigate = useNavigate();
    return (
        <div className="container my-4">
            <div className='container Task_headline Task_headline_todo my-2'>TODO</div>
            <form onSubmit={handleSubmit} className="container Login_form">
                <div className="row mb-3">
                    <label htmlFor="email" className="col-sm-2 col-form-label">
                        Email:
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="email"
                            className="form_input"
                            id="email"
                            name="email"
                            value={EmailPassword.email}
                            onChange={onChange}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="password" className="col-sm-2 col-form-label ">
                        Password:
                    </label>
                    <div className="col-sm-10 ">
                        <input
                            type="password"
                            className="form_input pass_input"
                            id="password"
                            name="password"
                            value={EmailPassword.password}
                            onChange={onChange}
                        />
                    </div>
                </div>
                <div className="container submit_btn ">
                    <button type="submit" className="btn submit_btn1">
                        Login
                    </button>
                </div>
                <div className="container">
                    <div className="container signup" onClick={() => {
                        navigate('/signup')
                    }}>
                        new user? signup
                    </div>
                </div>
            </form>
        </div>
    );
};
export default Login;
