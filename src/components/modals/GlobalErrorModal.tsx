import { useGlobalError } from "../../hooks/GlobalErrorHook";

export function GlobalErrorModal() {
    const { error, clearError } = useGlobalError();

    if (!error) return null;

    return (
        <dialog open id="modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{error.title}</h3>
          <p className="py-4">{error.message}</p>
          <div className="modal-action">
            <button className="btn" onClick={clearError}> Ok </button>
          </div>
        </div>
      </dialog>
    );
}