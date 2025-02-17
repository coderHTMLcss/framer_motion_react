import { useState } from "react";
import { motion } from "framer-motion";

const images = [
    "https://images.unsplash.com/photo-1516905041604-7935af78f572?q=80&w=3870&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516906571665-49af58989c4e?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1515704089429-fd06e6668458?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1525548002014-e18135d814d7?q=80&w=3870&auto=format&fit=crop",
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showThumbnails, setShowThumbnails] = useState(false);

    const changeSlide = (direction: number) =>
        setCurrentIndex((prev) => (prev + direction + images.length) % images.length);

    const selectSlide = (index: number) => {
        setCurrentIndex(index);
        setShowThumbnails(true);
        setTimeout(() => setShowThumbnails(false), 5000);
    };

    return (
        <div className="relative w-[50%] overflow-hidden">
            {/* Thumbnails */}
            <motion.div
                className={`flex mb-8 transition-opacity duration-300
                     ${showThumbnails ? "opacity-100" : "opacity-0"}`}
            >
                {images.map((img, i) => (
                    <div
                        key={i}
                        onClick={() => selectSlide(i)}
                        className={`w-40 h-20 mt-8 cursor-pointer rounded-lg overflow-hidden border-2 
                            ${currentIndex === i ? "border-blue-500" : "border-transparent"
                            }`}
                    >
                        <img
                            src={img}
                            alt={`Thumbnail ${i + 1}`}
                            className="w-full h-full object-cover" />
                    </div>
                ))}
            </motion.div>

            {/* Main Slider */}
            <motion.div
                className="flex overflow-hidden relative"
                onMouseEnter={() => setShowThumbnails(true)}
                onMouseLeave={() => setShowThumbnails(false)}
            >
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: `${-currentIndex * 100}%` }}
                    transition={{ duration: 1 }}
                    className="flex h-[400px]"
                >
                    {images.map((img, i) => (
                        <div
                            key={i}
                            className="min-w-full h-full flex justify-center items-center">
                            <img
                                src={img}
                                alt={`Slide ${i + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </motion.div>


                {/* Navigation Buttons */}
                <NavButton
                    direction="left"
                    onClick={() => changeSlide(-1)}
                    visible={showThumbnails} />
                <NavButton
                    direction="right"
                    onClick={() => changeSlide(1)}
                    visible={showThumbnails} />
            </motion.div>
        </div>
    );
};

type NavButtonProps = {
    direction: "left" | "right";
    onClick: () => void;
    visible: boolean
}

const NavButton = ({ direction, onClick, visible }: NavButtonProps) => (
    <button
        onClick={onClick}
        className={`absolute ${direction === "left" ? "left-4" : "right-4"} 
        transform -translate-y-1/3 p-2 shadow transition-opacity duration-300 
        ${visible ? "opacity-100" : "opacity-0"}`}
    >
        {direction === "left" ? "❮" : "❯"}
    </button>
);

export default Carousel;
