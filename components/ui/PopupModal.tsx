import { cn } from "@/lib";
import { XMarkIcon } from "@heroicons/react/24/solid";
import {
    Modal,
    ModalContent,
    ModalBody,
} from "@nextui-org/modal";
import { ReactElement, ReactNode } from "react";

const PopupModal = ({
    isOpen,
    onClose,
    size,
    backdrops,
    placement,
    className,
    name,
    children,
    showCloseButton = true,
}: {
    isOpen: boolean;
    onClose: (value?: any) => any;
    className?: string;
    name?: string;
    children?: string | ReactElement | ReactNode | ReactElement[] | ReactNode[];
    backdrops?: "opaque" | "blur" | "transparent" | undefined;
    size?: "xl" | "xs" | "sm" | "md" | "lg" | "2xl" | "3xl" | "4xl" | "5xl" | "full" | undefined;
    placement?: "center" | "auto" | "top" | "top-center" | "bottom" | "bottom-center" | undefined;
    showCloseButton?: boolean;
}) => {
    return (
        <Modal
            id={name ? name : `modal-${Date.now()}`}
            size={size ? size : "lg"}
            isOpen={isOpen}
            onClose={onClose}
            className={cn("py-4')]", className)}
            classNames={{
                closeButton: 'hidden',
            }}
            placement={placement ? placement : "center"}
            scrollBehavior="inside"
            backdrop={backdrops ? backdrops : "opaque"}
        >
            <ModalContent>
                {(onClose) => (
                    <ModalBody className="px-3 sm:px-5">

                        {showCloseButton && (
                            <div className="h-8 sticky">
                                <button onClick={onClose}
                                    className="bg-[#F9F9F9] h-10 w-10 flex items-center justify-center rounded-full z-30 p-1"
                                >
                                    <XMarkIcon className="h-4 w-4 text-black" />
                                </button>
                            </div>
                        )}

                        {children}

                    </ModalBody>
                )}
            </ModalContent>
        </Modal>
    );
};

export default PopupModal;
