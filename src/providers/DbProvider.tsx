import { useMemo, type ReactNode } from "react";
import { FakeDbContext } from "../data/FakeDbContext";
import { DbContext } from "../contexts/DbContext";

export function DbProvider({ children }: { children: ReactNode }) {
  const db = useMemo(() => new FakeDbContext(), []);

  return <DbContext.Provider value={db}>{children}</DbContext.Provider>;
}
