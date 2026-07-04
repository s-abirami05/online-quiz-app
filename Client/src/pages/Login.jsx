import { useState } from "react";

import { useNavigate }
    from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [username, setUsername] =
        useState("");

    const [email, setEmail] =
        useState("");

    const handleStart = () => {

        if (
            username.trim() === "" ||
            email.trim() === ""
        ) {

            alert(
                "Username and Email are required!"
            );

            return;
        }

        localStorage.setItem(
            "username",
            username
        );

        localStorage.setItem(
            "email",
            email
        );

        navigate("/quiz");
    };

    return (

        <div className="login-container">

            <div className="login-card">

                <h1>
                    Online Quiz Application
                </h1>
                <input
                    type="text"
                    placeholder="Enter Username "
                    value={username}

                    onChange={(e) =>
                        setUsername(
                            e.target.value
                        )
                    }

                    required
                />
                <input
                    type="email"
                    placeholder="Enter Email "
                    value={email}

                    onChange={(e) =>
                        setEmail(
                            e.target.value
                        )
                    }

                    required
                />
                <button onClick={handleStart}>
                    Attempt Quiz
                </button>

            </div>

        </div>
    );
}

export default Login;