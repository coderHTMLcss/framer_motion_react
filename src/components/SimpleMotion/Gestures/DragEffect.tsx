import { motion } from 'framer-motion';

const DragEffect = () => {
    return (
        <motion.div className='box'
            drag
            dragConstraints={{
                top: -50,
                left: -50,
                right: 50,
                bottom: 50,
            }}
        >

        </motion.div>
    )
}

export default DragEffect
