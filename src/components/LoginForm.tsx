import { useState } from "react";
import HomePage from "./HomePage";

function LoginForm() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            setError("Both fields are required.");
            return;
        }
        if (formData.email !== localStorage.getItem("email") || formData.password !== localStorage.getItem("password")) {
            setError("Email or password is incorrect.");
            return;
        }
        setError("");
        console.log("Form Submitted:", formData);
        localStorage.setItem("checkLogIn", "true");
        setFormData({ email: "", password: "" });
        setIsLoggedIn(true);
    }

    if (isLoggedIn) {
        return <HomePage />;
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-gray-200 p-6 rounded-xl w-96 gap-2">
                <h1 className="text-3xl font-bold text-blue-700 flex justify-center items-center">Login</h1>
                <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col">
                    <div className="mt-4">
                        <input
                            className="p-4 rounded"
                            type="email"
                            placeholder="Email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mt-4">
                        <input
                            className="p-4 rounded"
                            type="password"
                            placeholder="Password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    {error && <p className="text-red-700">{error}</p>}
                    <button className="bg-emerald-600 rounded text-xl px-4 py-2 font-semibold mt-4" type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
