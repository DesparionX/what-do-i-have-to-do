import { createContext } from "react";
import type { AuthContextOptions } from "./context-options/AuthContextOptions";

export const AuthContext = createContext<AuthContextOptions | null>(null);
