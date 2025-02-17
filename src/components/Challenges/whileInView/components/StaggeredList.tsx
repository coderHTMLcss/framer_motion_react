import { motion } from 'framer-motion';

const StaggeredList = () => {
    const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    return (
        <motion.ul
            className='flex flex-col items-center'
            variants={variants}
            initial="hidden"
            whileInView='visible'
            transition={{ staggerChildren: 0.3 }}
        >
            {items.length > 0 && items.map((item, index) => (
                <motion.li
                    key={index}
                    className='bg-blue-500 p-4 text-white my-2 rounded-lg'
                    variants={variants}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {item}
                </motion.li>
            ))}
        </motion.ul>
    )
}

export default StaggeredList
