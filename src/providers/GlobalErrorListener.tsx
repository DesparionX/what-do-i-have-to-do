import { useEffect } from "react";
import { useGlobalError } from "../hooks/GlobalErrorHook";

export function GlobalErrorListener() {
    const { showError } = useGlobalError();

    useEffect(() => {
        const onError = (event: ErrorEvent) => {
            showError({ title: "Error !", message: event.message, stack: event.error?.stack });
        };

        const onUnhandledRejection = (event: PromiseRejectionEvent) => {
            const reason = 
                event.reason instanceof Error ?
                event.reason.message
                : String(event.reason);

            showError({ title: "Error !", message: reason});
        };

        window.addEventListener("error", onError);
        window.addEventListener("unhandledrejection", onUnhandledRejection);

        return () => {
            window.removeEventListener("error", onError);
            window.removeEventListener("unhandledrejection", onUnhandledRejection);
        };
    }, [showError]);

    return null;
}