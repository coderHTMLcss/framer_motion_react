import { motion } from 'framer-motion';

const BouncingLoader = () => {
    return (
        <div
            className='flex justify-center items-center space-x-2'
            role="status"
            aria-label="Loading"
        >
            {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                    key={i}
                    className='w-4 h-4 bg-teal-500 rounded-full'
                    animate={{
                        y: [0, -12, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 0.6,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        delay: i * 0.2,
                    }}
                />
            ))}
        </div>
    );
};

export default BouncingLoader;
