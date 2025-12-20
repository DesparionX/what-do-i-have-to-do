import type { ModalOptions } from "../context-options/ModalContextOptions";

export type ModalContextType = {
  showModal: (options: ModalOptions) => Promise<boolean>;
};
