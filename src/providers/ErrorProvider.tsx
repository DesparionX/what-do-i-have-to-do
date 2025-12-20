import { useState, type ReactNode } from "react";
import type { GlobalError } from "../utils/types/GlobalError";
import { ErrorContext } from "../contexts/ErrorContext";

export function ErrorProvider({ children }: {children: ReactNode}) {
    const [error, setError] = useState<GlobalError | null>(null);

    return (
        <ErrorContext.Provider value={{
            error,
            showError: setError,
            clearError: () => setError(null),
        }}>
            {children}
        </ErrorContext.Provider>
    );
}