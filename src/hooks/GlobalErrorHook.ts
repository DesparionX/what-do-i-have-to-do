import { useContext } from "react";
import { ErrorContext } from "../contexts/ErrorContext";

export function useGlobalError() {
  const ctx = useContext(ErrorContext);
  if (!ctx) throw new Error("useGlobalError must be used inside ErrorProvider");
  return ctx;
}
