"use client";
export const login = async (input, set, redirect, use) => {
    try {
        const res = await fetch("/api/Login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(input),
        });
        const response = await res.json();
        if (response.status) {
            use(response.user);
            localStorage.setItem("token", response.token);
            redirect.push("/");
        } else {
            set(response.message);
        }
    } catch (err) {
        console.log(err);
    }
};

export const signup = async (input, set, redirect, use) => {
    try {
        const res = await fetch("/api/Signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(input),
        });
        const response = await res.json();
        if (response.status) {
            use(response.user);
            localStorage.setItem("token", response.token);
            redirect.push("/");
        } else {
            set(response.message);
        }
    } catch (err) {
        console.log(err);
    }
};

export const check = async (update) => {
    const token = localStorage.getItem("token");

    if (token) {
        const res = await fetch("/api/CheckAuth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ token }),
        });
        const response = await res.json();

        if (response.status) {
            update(response.user);
        }
    }
};

export const logout = (update) => {
    update(null);
    localStorage.removeItem("token");
};
