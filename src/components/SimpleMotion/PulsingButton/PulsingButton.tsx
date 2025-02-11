import { motion } from "framer-motion";

const PulsingButton = () => {
    return (
        <motion.button
            className="px-4 py-3 text-white bg-blue-500 
        rounded outline-none"
            animate={{
                scale: [1, 1.2, 1],
                background: ["#3b82f6", "#60a5fa", "#3b82f6"]
            }}

            transition={{ duration: 1, ease: 'easeInOut', repeat: Infinity }}
        >
            Click Me
        </motion.button>
    )
}

export default PulsingButton
