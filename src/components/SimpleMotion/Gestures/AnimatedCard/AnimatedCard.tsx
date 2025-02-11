import { motion } from 'framer-motion';

const AnimatedCard = () => {
    return (
        <motion.div
            initial={{
                scale: 1,
                rotate: 0
            }}
            whileHover={{
                scale: 1.05,
                rotate: 3
            }}
            whileTap={{
                scale: 0.95
            }}
            drag
            dragConstraints={{
                left: -50,
                right: 50,
                top: -50,
                bottom: 50
            }}
            dragElastic={0.2}
            transition={{
                type: 'spring',
                stiffness: 300
            }}
            className='max-w-sm mx-auto bg-white rounded-lg shadow-lg
         overflow-hidden cursor-pointer'>
            <img className='w-full h-48 object-cover'
                src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                alt="bridge picture" />
            <div className='p-6'>
                <h2 className='text-xl text-teal-500 font-semibold mb-2'>Card Title</h2>
                <p className='text-gray-700 mb-4'>Framer Motion Animations</p>
                <button className='px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-300 transition'>
                    Learn More
                </button>
            </div>
        </motion.div>
    )
}

export default AnimatedCard;
