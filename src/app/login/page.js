"use client";
import { useUser } from "@/component/UserContext";
import { login } from "@/component/http_request";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import "@/styles/Login.scss";

const Login = () => {
    const { updateuser } = useUser();
    const redirect = useRouter();
    const [input, setInput] = useState({ email: "", password: "" });
    const [show, setShow] = useState(false);
    const [error, setError] = useState("");
    return (
        <div className="login">
            <div className="error">{error}</div>
            <form>
                <div className="input">
                    <label>Email: </label>
                    <input
                        type="email"
                        value={input.email}
                        onInput={(e) =>
                            setInput((t) => {
                                return { ...t, email: e.target.value };
                            })
                        }
                    />
                </div>
                <div className="input">
                    <label>Password: </label>
                    <input
                        type={show ? "text" : "password"}
                        value={input.password}
                        onInput={(e) =>
                            setInput((t) => {
                                return { ...t, password: e.target.value };
                            })
                        }
                    />
                </div>
                <div className="check">
                    <input
                        type="checkbox"
                        checked={show}
                        onChange={() => setShow((t) => !t)}
                    />
                    <label>Show password</label>
                </div>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        login(input, setError, redirect, updateuser);
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Login;
