"use client";
import React, { useEffect } from "react";
import { useUser } from "./UserContext";
import { check, logout } from "./http_request";
import Link from "next/link";
import "@/styles/header.scss";
import { useRouter } from "next/navigation";

const Header = () => {
    const { user, updateuser } = useUser();
    const redirect = useRouter();
    useEffect(() => {
        const f = async () => {
            await check(updateuser);
        };
        f();
    }, []);
    return (
        <div className="navbar bg-[#000000]  shadow ">
            <h1
                onClick={() => {
                    redirect.push("/");
                }}
            >
                Ecom
            </h1>
            <div>
                {user ? (
                    <button onClick={() => logout(updateuser)}>Logout</button>
                ) : (
                    <ul>
                        <Link href="/signup">Signup</Link>
                        <Link href="/login">Login</Link>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Header;
