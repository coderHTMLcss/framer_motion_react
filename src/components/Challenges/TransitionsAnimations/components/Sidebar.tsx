import { useState } from "react";
import { motion } from "framer-motion";


const Sidebar = () => {
    const [isOpen, setIsOPen] = useState<boolean>(false);

    return (
        <div className="flex">
            <button
                className="px-4 py-2 bg-orange-500 mb-5 rounded-lg text-gray-700"
                onClick={() => setIsOPen(prev => !prev)}
            >
                Toggle Sidebar
            </button>
            <motion.div
                className={`fixed left-0 top-0 h-full bg-gray-700
                    text-white p-4 ${isOpen ? "" : "-translate-x-full"}`}
                initial={{ x: "-100%" }}
                animate={{ x: isOpen ? "0%" : "-100%" }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-lg font-bold">Sidebar</h2>
                <p>Content goes here!</p>
            </motion.div>
        </div >
    )
};

export default Sidebar;