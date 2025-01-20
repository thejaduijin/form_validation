import { useState } from 'react'
import LoginForm from './LoginForm';

function SignupForm() {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const [error, setError] = useState("");
    const [isSignedUp, setIsSignedUp] = useState(false);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(formData.password);
        if (!formData.name || !formData.email || !formData.password) {
            setError("All fields are required.");
            return;
        }
        setError("");
        // console.log("Form Submitted:", formData);

        localStorage.setItem("name", formData.name);
        localStorage.setItem("email", formData.email);
        localStorage.setItem("password", formData.password);
        localStorage.setItem("checkSignUp", "true");
        // localStorage.setItem("checkLogIn", "true");

        setFormData({ name: "", email: "", password: "" });
        setIsSignedUp(true);
    }


    if (isSignedUp) {
        return <LoginForm />;
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-gray-200 p-6 rounded-xl w-96 gap-2">
                <h1 className="text-3xl font-bold text-blue-700 flex justify-center items-center">Signup</h1>
                <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col">
                    <div className="mt-4">
                        <input
                            className="p-4 rounded"
                            type="text"
                            placeholder="Name"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
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
                    <button className="bg-emerald-600 rounded text-xl px-4 py-2 font-semibold mt-4" type="submit">Signup</button>
                </form>
            </div>
        </div>
    )
}

export default SignupForm
