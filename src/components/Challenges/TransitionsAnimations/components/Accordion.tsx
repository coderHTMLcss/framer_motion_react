import { useState } from "react";
import { motion } from "framer-motion";

const items = [
    { title: "Item 1", content: "This is the content of item 1." },
    { title: "Item 2", content: "This is the content of item 2." },
    { title: "Item 3", content: "This is the content of item 3." },
];

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-3">
            {items.map((item, index) => (
                <div key={index}>
                    <button
                        className="w-full text-left p-2 bg-gray-600 rounded focus:outline-none"
                        onClick={() => toggleItem(index)}
                    >
                        {item.title}
                    </button>
                    <motion.div
                        className="overflow-hidden"
                        initial={{ height: 0 }}
                        animate={{ height: openIndex === index ? "auto" : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="p-2 bg-gray-300 rounded">{item.content}</div>
                    </motion.div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;