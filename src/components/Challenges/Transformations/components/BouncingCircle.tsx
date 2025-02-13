import { motion } from 'framer-motion';

const BouncingCircle = () => {
    return (
        <motion.div className='bg-blue-600 w-20 h-20 rounded-full'
            animate={{ y: [0, -100, 0] }}
            transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity }}
        >
        </motion.div>
    )
}

export default BouncingCircle
