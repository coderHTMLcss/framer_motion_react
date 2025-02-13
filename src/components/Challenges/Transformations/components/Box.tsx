import { motion } from 'framer-motion';
const Box = () => {
    return (
        <motion.div
            className='bg-teal-900 w-20 h-20'
            initial={{ x: -100 }}
            animate={{ x: 200 }}
            transition={{ duration: 3 }}
        >

        </motion.div>
    )
}

export default Box
