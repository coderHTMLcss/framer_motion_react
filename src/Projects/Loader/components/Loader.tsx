import { motion } from 'framer-motion';

const Loader = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, ease: 'linear', repeat: Infinity }}
                className='relative w-16 h-16 border-4 border-t-4
             border-blue-500 border-solid rounded-full'>
                <motion.div
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1, ease: 'linear', repeat: Infinity }}
                    style={{ borderTopColor: 'transparent' }}
                    className='absolute inset-0 border-4 border-blue-300 border-solid rounded-full'>

                </motion.div>
            </motion.div>
        </div>
    )
}

export default Loader;
