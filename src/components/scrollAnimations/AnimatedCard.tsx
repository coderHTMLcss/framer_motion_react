import { motion } from 'framer-motion';

const AnimatedCard = () => {
    return (
        <div className='flex justify-center items-center mt-[30rem]'>
            <div className='h-[200vh] w-full flex justify-center items-center text-black'>
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{
                        scale: 1.1,
                        opacity: 1,
                        y: -200
                    }}
                    transition={{ duration: 0.5 }}
                    className='bg-white rounded-lg p-6 shadow-lg text-center'
                >
                    <h2 className='text-2xl font-bold mb-2'>Card</h2>
                    <p>This is an animated card.</p>
                </motion.div>
            </div>
        </div>
    )
}

export default AnimatedCard
