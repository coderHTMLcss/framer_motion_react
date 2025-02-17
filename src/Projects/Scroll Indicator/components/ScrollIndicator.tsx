import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollIndicator = () => {
    const { scrollYProgress } = useScroll();

    const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

    return (
        <div className='h-[200h] p-[20px]'>
            <motion.div
                className='fixed top-0 left-0 h-[5px] bg-red-500'
                style={{
                    width: lineWidth,
                    transition: 'width 0.1s easy'
                }}
            />
            <div className='mt-[50px]'>
                {Array.from({ length: 100 }).map((_, index) => (
                    <p className='mt-[20px]' key={index}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                ))}
            </div>
        </div>
    )
}

export default ScrollIndicator;
