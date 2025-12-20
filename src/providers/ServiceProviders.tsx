import { useMemo, type ReactNode } from "react";
import { useDb } from "../hooks/DbHooks";
import { UserService } from "../services/UserService";
import { ServiceContext } from "../contexts/ServiceContext";
import { AuthService } from "../services/AuthService";
import { ListService } from "../services/ListService";

export function ServiceProviders({ children }: {children: ReactNode}){
    const db = useDb();
    const userService = useMemo(() => new UserService(db), [db]);
    const authService = useMemo(() => new AuthService(userService), [userService]);
    const listService = useMemo(() => new ListService(db), [db]);

    const services = useMemo(() => ({
        userService: userService,
        authService: authService,
        listService: listService
    }), [userService, authService, listService]);

    return (
        <ServiceContext.Provider value={services}>
            {children}
        </ServiceContext.Provider>
    );
}