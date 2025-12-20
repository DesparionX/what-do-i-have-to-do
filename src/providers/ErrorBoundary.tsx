import { Component, type ReactNode } from "react";
import { useGlobalError } from "../hooks/GlobalErrorHook";

class Boundary extends Component<{ onError: (e: Error) => void; children: ReactNode}> {
    componentDidCatch(error: Error) {
        this.props.onError(error);
    }

    render() {
        return this.props.children;
    }
}

export function ErrorBoundary({ children }: {children: ReactNode}) {
    const { showError } = useGlobalError();

    return (
        <Boundary onError={(e) => showError({ title: "Error", message: e.message, stack: e.stack })}>
            {children}
        </Boundary>
    );
}