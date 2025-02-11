import { motion } from 'framer-motion';

const TapEffect = () => {
    return (
        <motion.div className='box'
            whileTap={{
                scale: 0.8,
                backgroundColor: 'bisque'
            }}
            transition={{
                type: 'spring',
                stiffness: 300
            }}
        >

        </motion.div>
    )
}

export default TapEffect
