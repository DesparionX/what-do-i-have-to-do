import { createContext } from "react";
import type { ModalContextType } from "./context-types/ModalContextType";

export const ModalContext = createContext<ModalContextType | null>(null);
