import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const SignOutHandle = async (e) => {
        e.preventDefault();
        const url = "http://127.0.0.1:8000/signout";
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const res = await response.json();
            localStorage.removeItem("token");
            alert(res);
            navigate("/login"); // redirect into "/login" path
        } catch (err) {
            console.log("Error found");
        }
    };
    let navigate = useNavigate();
    return (
        <div className="signout" onClick={SignOutHandle}>
            Sign out
        </div>
    );
};
export default Signup;
