import { motion, useMotionValue, useMotionValueEvent } from 'framer-motion';

const UseMotionValue = () => {
    const x = useMotionValue(200);
    useMotionValueEvent(x, 'animationStart', () => {
        console.log('animation Start on X')
    });

    useMotionValueEvent(x, 'change', (latest) => {
        console.log('X changes to', latest)
    });

    return (
        <motion.div className='box' drag style={{ x }}>

        </motion.div>
    )
}

export default UseMotionValue;
