import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const galleryImages = [
    "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=3870&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=3870&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=3870&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1490682143684-14369e18dce8?q=80&w=3870&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1445964047600-cdbdb873673d?q=80&w=3784&auto=format&fit=crop",
];

const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            staggerDirection: 1,
            ease: "easeInOut",
        },
    },
    exit: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            staggerDirection: -1,
            ease: "easeInOut",
        },
    },
};

const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: 30, transition: { duration: 0.6 } },
};

const AnimatedGallery = () => {
    const [showImages, setShowImages] = useState(false);
    const intervalRef = useRef<number | null>(null);

    const handleClick = () => {
        setShowImages((prev) => !prev);
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
        }
    };

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setShowImages((prev) => !prev);
        }, 3000);

        return () => {
            if (intervalRef.current !== null) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    return (
        <div className="p-4">
            <button
                onClick={handleClick}
                className="mb-4 p-4 rounded-lg bg-yellow-400 text-black font-bold shadow-md hover:bg-yellow-500 transition"
            >
                {showImages ? "Hide Images" : "Show Images"}
            </button>

            <motion.div
                variants={parentVariants}
                initial="hidden"
                animate={showImages ? "visible" : "exit"}
                className="flex flex-wrap gap-4 justify-center"
            >
                {galleryImages.map((image, index) => (
                    <motion.img
                        key={index}
                        src={image}
                        alt={`Gallery Image ${index + 1}`}
                        variants={childVariants}
                        className="w-72 h-48 object-cover rounded-xl shadow-lg"
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default AnimatedGallery;
