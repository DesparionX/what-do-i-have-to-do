import { useContext } from "react";
import { ServiceContext } from "../contexts/ServiceContext";

export function useServices(){
    const ctx = useContext(ServiceContext);
    if (!ctx) throw new Error("userServices must be ussed inside <ServiceProviders>");
    return ctx;
}