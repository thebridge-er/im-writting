import { useState } from "react";

import "./Auth.css";

function Auth({ setUser }) {

    const [isLogin, setIsLogin] = useState(true);

    const [identifier, setIdentifier] = useState("");

    const [username, setUsername] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");

    function handleSubmit() {

        const storedUsers =
            JSON.parse(localStorage.getItem("users")) || [];

        /* REGISTER */

        if (!isLogin) {

            if (
                username.trim() === "" ||
                email.trim() === "" ||
                password.trim() === ""
            ) return;

            const emailRegex =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {

                alert("Invalid email");

                return;
            }

            if (password !== confirmPassword) {

                alert("Passwords do not match");

                return;
            }

            const userExists =
                storedUsers.find(

                    (user) =>

                        user.username === username ||
                        user.email === email

                );

            if (userExists) {

                alert("User already exists");

                return;
            }

            const newUser = {
                username,
                email,
                password
            };

            storedUsers.push(newUser);

            localStorage.setItem(
                "users",
                JSON.stringify(storedUsers)
            );

            alert("User created!");

            setIsLogin(true);

            return;
        }

        /* LOGIN */

        const validUser =

            storedUsers.find(

                (user) => (

                    user.username === identifier ||

                    user.email === identifier

                ) &&

                    user.password === password

            );

        if (!validUser) {

            alert("Invalid credentials");

            return;
        }

        localStorage.setItem(
            "loggedUser",
            JSON.stringify(validUser)
        );

        setUser(validUser);
    }

    return (

        <div className="auth-page">

            <div className="auth-box">

                <h1>
                    {isLogin ? "Login" : "Register"}
                </h1>

                {isLogin ? (

                    <input
                        type="text"
                        placeholder="Username or Email"
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                    />

                ) : (

                    <>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </>

                )}

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {!isLogin && (

                    <input
                        type="password"
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                )}

                <button onClick={handleSubmit}>
                    {isLogin ? "Login" : "Create Account"}
                </button>

                <p
                    className="auth-switch"
                    onClick={() => setIsLogin(!isLogin)}
                >

                    {isLogin
                        ? "No account? Register"
                        : "Already have an account? Login"}

                </p>

            </div>

        </div>
    );
}

export default Auth;