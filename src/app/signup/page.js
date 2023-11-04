"use client";
import { useUser } from "@/component/UserContext";
import { signup } from "@/component/http_request";
import { useRouter } from "next/navigation";
import "@/styles/Signup.scss";
import React, { useState } from "react";

const Signup = () => {
    const { updateuser } = useUser();
    const redirect = useRouter();
    const [input, setInput] = useState({ name: "", email: "", password: "" });
    const [show, setShow] = useState(false);
    const [error, setError] = useState("");
    return (
        <div className="login">
            <div className="error">{error}</div>
            <form>
                <div className="input">
                    <label>Name: </label>
                    <input
                        type="text"
                        value={input.name}
                        onInput={(e) =>
                            setInput((t) => {
                                return { ...t, name: e.target.value };
                            })
                        }
                        required
                    />
                </div>
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
                        required
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
                        required
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
                    className="btn"
                    onClick={(e) => {
                        e.preventDefault();
                        signup(input, setError, redirect, updateuser);
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Signup;
