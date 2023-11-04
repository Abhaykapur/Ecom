"use client";
import { createContext, useContext, useState } from "react";

const userContext = createContext();

export function useUser() {
    return useContext(userContext);
}

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const updateuser = (newUser) => {
        setUser(newUser);
    };

    return (
        <userContext.Provider value={{ user, updateuser }}>
            {children}
        </userContext.Provider>
    );
};
