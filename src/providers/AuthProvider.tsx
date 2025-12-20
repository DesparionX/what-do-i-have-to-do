import { useState, type ReactNode } from "react";
import { useServices } from "../hooks/ServicesHooks";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import type { IUserDto } from "../models/dtos/IUserDto";

export function AuthProvider({ children }: {children: ReactNode}){
    const { authService } = useServices();
    const navigate = useNavigate();
    
    const [currentUser, setCurrentUser] = useState<IUserDto | null>(() => {
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : null;
    });

    async function logInAsync(email: string, password: string, rememeberMe: boolean) {
        const result = await authService.logInAsync(email, password, rememeberMe);

        if (!result.succeeded)
            alert(result.message);

        if (!result.user)
            alert("Something went wrong. User is undefined.");

        setCurrentUser(result.user);
        navigate("/");
    }

    function logOut() {
        authService.logOut();
        setCurrentUser(null);
    }

    return (
        <AuthContext.Provider value={{currentUser, logInAsync, logOut}}>
            {children}
        </AuthContext.Provider>
    );
}