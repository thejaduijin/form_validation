import { useState } from "react";


function LoginForm() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

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
        setError("");
        console.log("Form Submitted:", formData);
        setFormData({ email: "", password: "" });
    }

    return (
        <>
            <div className="mt-5 flex flex-col gap-5 justify-center p-8 rounded bg-black">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col mt-4">
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
                    <div className="flex flex-col mt-4">
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
                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    )
}

export default LoginForm
