import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal can only be used inside ModalProvider");
  return ctx;
}
