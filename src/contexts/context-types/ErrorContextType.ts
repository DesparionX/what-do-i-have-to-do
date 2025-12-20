import type { GlobalError } from "../../utils/types/GlobalError";

export type ErrorContextType = {
  error: GlobalError | null;
  showError: (error: GlobalError) => void;
  clearError: () => void;
};
