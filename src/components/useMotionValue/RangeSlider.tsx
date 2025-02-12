import { motion, useMotionValue } from 'framer-motion';
import { ChangeEvent } from 'react';

const RangeSlider = () => {
    const scale = useMotionValue(1);

    const changeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        scale.set(parseFloat(e.target.value));
    };

    return (
        <div>
            <motion.button className='box' style={{ scale }} />
            <div className="mt-[6rem]">
                <input
                    type="range"
                    min={0.5}
                    max={1.5}
                    defaultValue={1}
                    step={0.05}
                    onChange={changeHandle}
                />
            </div>
        </div>
    )
};

export default RangeSlider;