import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export function useAuth(){
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error ("Auth service is only available inside <AuthProvider></AuthProvider>");
    return ctx;
}