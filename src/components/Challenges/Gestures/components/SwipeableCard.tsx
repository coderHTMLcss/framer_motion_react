import { motion } from "framer-motion";
import { useState } from "react";

const SwipeableCard = () => {
    const [isRemoved, setIsRemoved] = useState<boolean | null>(null);

    const handleSwipe = (_: MouseEvent | TouchEvent, info: { point: { x: number } }) => {
        if (info.point.x > 250) {
            setIsRemoved(true);
        } else if (info.point.x < 50) {
            setIsRemoved(false);
        }
    };

    return (
        <motion.div
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
            className="w-64 h-32 bg-blue-500 rounded-lg shadow-lg text-white flex justify-center items-center"
            onDragEnd={handleSwipe}
            animate={isRemoved === true ? { x: 300, opacity: 0 }
                : isRemoved === false ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
        >
            Swipe Me!
        </motion.div>
    );
};

export default SwipeableCard;
