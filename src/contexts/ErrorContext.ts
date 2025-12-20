import { createContext } from "react";
import type { ErrorContextType } from "./context-types/ErrorContextType";

export const ErrorContext = createContext<ErrorContextType | null>(null);
