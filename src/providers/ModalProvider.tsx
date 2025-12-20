import { useEffect, useRef, useState, type ReactNode } from "react";
import type { ModalOptions } from "../contexts/context-options/ModalContextOptions";
import { ModalContext } from "../contexts/ModalContext";

export function ModalProvider({ children }: { children: ReactNode}) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const resolverRef = useRef<((value: boolean) => void) | null>(null);

    const [modalData, setModalData] = useState<ModalOptions | null>(null);

    async function showModal(options: ModalOptions): Promise<boolean> {
        return new Promise<boolean>((resolve) => {
            resolverRef.current = resolve;
            setModalData(options);
        });
    }

    function closeModal(result: boolean) {
        dialogRef.current?.close();
        resolverRef.current?.(result);
        resolverRef.current = null;
        setModalData(null);
    }

    useEffect(() => {
        if (modalData && dialogRef.current && !dialogRef.current.open) {
            dialogRef.current?.showModal();
        }
    }, [modalData]);

    return (
        <ModalContext.Provider value={{ showModal }}>
            {children}

            {modalData && (
                <dialog open={modalData.open} ref={dialogRef} id="modal" className="modal sm:modal-middle">
                    <div className="modal-box white-bg-fat-border">
                        <h3 className="font-bold text-xl">{modalData.title}</h3>
                        <p className="py-4">{modalData.message}</p>
                        <div className="modal-action">
                            <form id="form" method="dialog" className="flex flex-row flex-wrap gap-5">
                                { modalData.hasConfirm ? 
                                    (<>
                                    <button type="button" className="btn white-bg-fat-border h-12 button-text" onClick={() => closeModal(true)}>
                                        Confirm 
                                    </button>
                                    <button type="button" className="btn white-bg-fat-border h-12 button-text" onClick={() => closeModal(false)}>
                                        Cancel
                                    </button>
                                    </>) : 
                                    (<button className="btn white-bg-fat-border h-12 button-text" onClick={() => closeModal(true)}>Ok</button>)
                                }
                            </form>
                        </div>
                    </div>
                </dialog>
            )}
        </ModalContext.Provider>
    );
}