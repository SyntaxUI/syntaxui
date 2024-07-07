'use client'

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Position {
    x: number;
    y: number;
}

export default function MagneticButton() {
    const ref = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (ref.current) {
            const { clientX, clientY } = e;
            const { height, width, left, top } = ref.current.getBoundingClientRect();
            const middleX = clientX - (left + width / 2);
            const middleY = clientY - (top + height / 2);
            setPosition({ x: middleX, y: middleY });
        }
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;
    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className='relative rounded-xl bg-red-500 px-6 py-2 text-sm font-medium text-white'
        >
            SyntaxUI
        </motion.button>
    );
}