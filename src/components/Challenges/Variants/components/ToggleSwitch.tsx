// import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../../../shared/useTheme";

const switchVariants = {
    off: { x: 0 },
    on: { x: 70 },
};

const ToggleSwitch = () => {
    const { theme, toggleTheme } = useTheme()
    // const [isOn, setIsOn] = useState(false);
    const isOn = theme === 'dark';
    return (
        <div className="relative inline-block w-36 h-16">
            <div
                className={`w-full h-full rounded-full bg-gray-300 cursor-pointer ${isOn ? "bg-green-500" : ""
                    }`}
                onClick={toggleTheme}
            />
            <motion.div
                className="absolute top-1 left-1 w-14 h-14 rounded-full bg-white shadow"
                variants={switchVariants}
                animate={isOn ? "on" : "off"}
                transition={{ type: "spring", stiffness: 300 }}
            />
        </div>
    );
};

export default ToggleSwitch;