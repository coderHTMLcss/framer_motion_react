import { motion } from "framer-motion";

const boxAnimation = {
    x: [0, 100, 0],
};

const transitionConfig = (i: number) => ({
    duration: 2,
    delay: i * 0.5,
    repeat: Infinity,
});

const SequentialBoxes = () => (
    <div className="flex gap-10">
        {Array.from({ length: 3 }, (_, i) => (
            <motion.div
                key={i}
                className="bg-teal-500 w-20 h-20 rounded-full"
                initial={{ x: 0 }}
                animate={boxAnimation}
                transition={transitionConfig(i)}
            />
        ))}
    </div>
);

export default SequentialBoxes;
