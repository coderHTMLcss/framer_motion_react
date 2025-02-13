import { motion } from 'framer-motion';
import { useState } from 'react';

const FadeComponent = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    return (
        <div className='relative'>
            <button
                className='px-4 py-2 bg-teal-600 text-black rounded-lg cursor-pointer hover:bg-teal-400'
                onClick={() => setIsVisible(prev => !prev)}>
                {isVisible ? "Show" : "Hide"}
            </button>
            {isVisible && (
                <motion.div
                    className='absolute top-20 left-0 w-[300px] bg-orange-600 p-6'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 3 }}
                >
                    Hi, I am an animated div
                </motion.div>
            )}
        </div>
    )
}

export default FadeComponent
