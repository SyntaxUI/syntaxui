'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NeobrutalismToggle = ({
  onToggle,
}: {
  onToggle?: (toggled: boolean) => void;
}) => {
  const [toggled, setToggled] = useState(true);
  const springConfig = { type: 'spring', stiffness: 500, damping: 30 };

  const handleToggle = () => {
    const newState = !toggled;
    setToggled(newState);
    if (onToggle) {
      onToggle(newState);
    }
  };

  return (
    <motion.button
      className={`relative h-[25px] w-[45px] translate-x-1 translate-y-1 cursor-pointer  rounded-full bg-[#222222]`}
      onClick={handleToggle}
    >
      <motion.span
        className="flex h-full w-full items-center justify-center  rounded-full border-[2px]  border-[#222222] bg-[#ff527a] p-[2px]"
        variants={{
          on: { x: -1, y: -1 },
          off: { x: -3, y: -3 },
        }}
        initial={'off'}
        animate={toggled ? 'on' : 'off'}
        transition={springConfig}
      >
        <motion.span
          className="aspect-square h-full transform rounded-full border-[2px] border-[#222222] bg-white shadow-lg"
          variants={{
            on: { x: 10 },
            off: { x: -10 },
          }}
          initial={'off'}
          animate={toggled ? 'on' : 'off'}
          transition={springConfig}
        />
      </motion.span>
    </motion.button>
  );
};

export default NeobrutalismToggle;
