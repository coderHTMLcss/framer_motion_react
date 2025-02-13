import { motion } from 'framer-motion';

const SpinningIcon = () => {
    return (
        <motion.img
            className='w-40 h-auto object-cover'
            src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmlld3xlbnwwfHwwfHx8MA%3D%3D"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, ease: "linear", repeat: Infinity }}
        />


    )
}

export default SpinningIcon
