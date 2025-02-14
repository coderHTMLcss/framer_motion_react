import { motion } from "framer-motion";
import { useState } from "react";

const RotateOnDrag = () => {
    const [rotate, setRotate] = useState<number>(0);

    const handleDrag = (_: MouseEvent | TouchEvent, info: { delta: { x: number } }) => {
        setRotate((prev) => prev + info.delta.x / 2);
    };

    return (
        <motion.div
            className="w-32 h-32 bg-red-500 rounded-lg flex justify-center items-center"
            drag
            dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
            onDrag={handleDrag}
            style={{ rotate }}
            transition={{ type: "spring", stiffness: 50 }}
        >
            Drag Me!
        </motion.div>
    );
};

export default RotateOnDrag;
