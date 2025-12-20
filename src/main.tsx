import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.tsx";
import { DbProvider } from "./providers/DbProvider.tsx";
import { ServiceProviders } from "./providers/ServiceProviders.tsx";
import { AuthProvider } from "./providers/AuthProvider.tsx";
import { ErrorProvider } from "./providers/ErrorProvider.tsx";
import { GlobalErrorListener } from "./providers/GlobalErrorListener.tsx";
import { GlobalErrorModal } from "./components/modals/GlobalErrorModal.tsx";
import { ModalProvider } from "./providers/ModalProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorProvider>
        <GlobalErrorListener/>
        <GlobalErrorModal/>
        <ModalProvider>
          <DbProvider>
            <ServiceProviders>
              <AuthProvider>
                <AppRoutes />
              </AuthProvider>
            </ServiceProviders>
          </DbProvider>
        </ModalProvider>
      </ErrorProvider>
    </BrowserRouter>
  </StrictMode>
);
