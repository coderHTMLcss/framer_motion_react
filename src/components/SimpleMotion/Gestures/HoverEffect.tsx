import { motion } from 'framer-motion';

const HoverEffect = () => {
    return (
        <motion.div className='box'
            whileHover={{
                scale: 1.2,
                rotate: 90
            }}
            transition={{
                type: 'spring',
                stiffness: 300
            }}
        >

        </motion.div>
    )
}

export default HoverEffect;
