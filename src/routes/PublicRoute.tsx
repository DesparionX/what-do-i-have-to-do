import type { ReactNode } from "react";
import { useAuth } from "../hooks/services-hooks/AuthHooks";
import { Navigate } from "react-router-dom";

export function PublicRoute({ children }: { children: ReactNode }){

    const { currentUser } = useAuth();
    
    if (currentUser)
        return <Navigate to="/" replace />

    return children;
}