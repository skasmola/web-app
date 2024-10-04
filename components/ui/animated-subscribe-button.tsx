"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface AnimatedSubscribeButtonProps {
  buttonColor: string;
  buttonHoverColor?: string,
  buttonTextColor?: string;
  text: React.ReactElement | string;
}

export const AnimatedSubscribeButton: React.FC<
  AnimatedSubscribeButtonProps
> = ({ buttonColor, buttonHoverColor, buttonTextColor, text }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.button
        className="relative flex w-[175px] cursor-pointer items-center justify-center rounded-full border-none p-[10px]"
        style={{ backgroundColor: buttonColor, color: buttonTextColor }}
        whileHover={{ backgroundColor: buttonHoverColor }}
      >
        <motion.span key="reaction" className="relative block font-bold">
          {text}
        </motion.span>
      </motion.button>
    </AnimatePresence>
  );
};
