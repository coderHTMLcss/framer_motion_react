import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const ToastNotification = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;
        if (isVisible) {
            timer = setTimeout(() => setIsVisible(false), 1500);
        }
        return () => clearTimeout(timer);
    }, [isVisible]);

    return (
        <div className="flex flex-col items-center">
            <button
                className="mb-4 p-3 bg-teal-500 text-black rounded"
                onClick={() => setIsVisible(true)}
            >
                Show Notification
            </button>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        className="fixed top-4 right-4 p-4 bg-green-500 text-white rounded shadow-lg"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        Notification: Action Successful!
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ToastNotification;
