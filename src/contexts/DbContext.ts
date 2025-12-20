import { createContext } from "react";
import type { FakeDbContext } from "../data/FakeDbContext";

export const DbContext = createContext<FakeDbContext | null>(null);
