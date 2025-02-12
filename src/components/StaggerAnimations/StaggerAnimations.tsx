import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3, // Затримка між елементами
            staggerDirection: 1,  // Прямий порядок
        },
    },
    exit: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            staggerDirection: -1, // Зворотній порядок
        },
    },
};

const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 }, // Рух вниз при зникненні
};

const StaggerAnimations = () => {
    const [isVisible, setIsVisible] = useState(true);

    // Перемикання анімації кожні 3 секунди
    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(prev => !prev);
        }, 2000); // Час затримки перед зворотнім рухом

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            variants={parentVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'exit'} // Перемикання станів
        >
            {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="box mt-4 bg-green-400 text-white p-4 rounded-md text-center"
                    variants={childVariants}
                >
                    {i}
                </motion.div>
            ))}
        </motion.div>
    );
};

export default StaggerAnimations;
