import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => setIsOpen((prev) => !prev);

    return (
        <div className="flex flex-col items-center text-black">
            <button
                className="mb-4 p-2 bg-blue-500 text-white rounded"
                onClick={toggleModal}
            >
                Open Modal
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 flex 
                        justify-center items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={toggleModal}
                    >
                        <motion.div
                            className="bg-white p-4 rounded shadow-lg"
                            initial={{ y: "-100vh", opacity: 0 }}
                            animate={{ y: "0vh", opacity: 1 }}
                            exit={{ y: "-100vh", opacity: 0, rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h2 className="text-lg font-bold">Modal Title</h2>
                            <p>This is a modal window!</p>
                            <button
                                className="mt-4 p-2 bg-red-500 text-white rounded"
                                onClick={toggleModal}
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Modal;
