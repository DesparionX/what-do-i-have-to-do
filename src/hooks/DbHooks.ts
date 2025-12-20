import { useContext } from "react";
import { DbContext } from "../contexts/DbContext";

export function useDb() {
  const ctx = useContext(DbContext);
  if (!ctx) throw new Error("useDb must be used inside <DbProvider>");
  return ctx;
}
