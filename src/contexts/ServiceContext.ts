import { createContext } from "react";
import type { IServices } from "../services/IServices";

export const ServiceContext = createContext<IServices | null>(null);