import { motion } from 'framer-motion';

const BouncingBall = () => {
    return (
        <motion.div
            className='w-20 h-20 rounded-full bg-teal-500'
            animate={{ y: [0, 100, 0] }}
            transition={{
                duration: 1,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'loop',
            }}
        >

        </motion.div>
    )
}

export default BouncingBall;
