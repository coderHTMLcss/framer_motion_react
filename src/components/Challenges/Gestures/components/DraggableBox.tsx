import { motion } from "framer-motion";

const DraggableBox = () => {
    return (
        <motion.div
            drag
            dragConstraints={{ left: 0, right: 300, top: 0, bottom: 300 }}
            className="w-32 h-32 bg-green-500 rounded-lg shadow-lg
             text-blue-600 flex justify-center items-center"
        >
            Drag me!
        </motion.div>
    );
};

export default DraggableBox;
