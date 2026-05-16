"use client";

import { cn } from "@/lib/utils";
import { useState, useRef, useEffect, createContext, useContext } from "react";
import {
  motion,
  type MotionValue,
  type SpringOptions,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

const ImageComparisonContext = createContext<
  | {
      sliderPosition: number;
      setSliderPosition: (pos: number) => void;
      motionSliderPosition: MotionValue<number>;
    }
  | undefined
>(undefined);

export type ImageComparisonProps = {
  children: React.ReactNode;
  className?: string;
  enableHover?: boolean;
  springOptions?: SpringOptions;
};

const DEFAULT_SPRING_OPTIONS = { bounce: 0, duration: 0 };

function ImageComparison({
  children,
  className,
  enableHover,
  springOptions,
}: ImageComparisonProps) {
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const divRef = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(50);
  const motionSliderPosition = useSpring(
    motionValue,
    springOptions ?? DEFAULT_SPRING_OPTIONS
  );
  const [sliderPosition, setSliderPosition] = useState(50);

  // Non-passive touchmove listener so preventDefault() stops page scroll while dragging
  useEffect(() => {
    const el = divRef.current;
    if (!el) return;
    const prevent = (e: TouchEvent) => {
      if (isDraggingRef.current || enableHover) e.preventDefault();
    };
    el.addEventListener("touchmove", prevent, { passive: false });
    return () => el.removeEventListener("touchmove", prevent);
  }, [enableHover]);

  const handleDrag = (event: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging && !enableHover) return;
    const containerRect = (
      event.currentTarget as HTMLElement
    ).getBoundingClientRect();
    const x =
      "touches" in event
        ? event.touches[0].clientX - containerRect.left
        : (event as React.MouseEvent).clientX - containerRect.left;
    const percentage = Math.min(
      Math.max((x / containerRect.width) * 100, 0),
      100
    );
    motionValue.set(percentage);
    setSliderPosition(percentage);
  };

  return (
    <ImageComparisonContext.Provider
      value={{ sliderPosition, setSliderPosition, motionSliderPosition }}
    >
      <div
        ref={divRef}
        className={cn(
          "relative overflow-hidden select-none",
          enableHover && "cursor-ew-resize",
          className
        )}
        onMouseMove={handleDrag}
        onMouseDown={() => { if (!enableHover) { setIsDragging(true); isDraggingRef.current = true; } }}
        onMouseUp={() => { if (!enableHover) { setIsDragging(false); isDraggingRef.current = false; } }}
        onMouseLeave={() => { if (!enableHover) { setIsDragging(false); isDraggingRef.current = false; } }}
        onTouchMove={handleDrag}
        onTouchStart={() => { if (!enableHover) { setIsDragging(true); isDraggingRef.current = true; } }}
        onTouchEnd={() => { if (!enableHover) { setIsDragging(false); isDraggingRef.current = false; } }}
      >
        {children}
      </div>
    </ImageComparisonContext.Provider>
  );
}

const ImageComparisonImage = ({
  className,
  alt,
  src,
  position,
}: {
  className?: string;
  alt: string;
  src: string;
  position: "left" | "right";
}) => {
  const { motionSliderPosition } = useContext(ImageComparisonContext)!;
  const leftClipPath = useTransform(
    motionSliderPosition,
    (value) => `inset(0 0 0 ${value}%)`
  );
  const rightClipPath = useTransform(
    motionSliderPosition,
    (value) => `inset(0 ${100 - value}% 0 0)`
  );

  return (
    <motion.img
      src={src}
      alt={alt}
      className={cn("absolute inset-0 h-full w-full object-cover", className)}
      style={{
        clipPath: position === "left" ? leftClipPath : rightClipPath,
      }}
    />
  );
};

const ImageComparisonSlider = ({
  className,
  children,
}: {
  className: string;
  children?: React.ReactNode;
}) => {
  const { motionSliderPosition } = useContext(ImageComparisonContext)!;
  const left = useTransform(motionSliderPosition, (value) => `${value}%`);

  return (
    <motion.div
      className={cn("absolute top-0 bottom-0 w-1 cursor-ew-resize", className)}
      style={{ left }}
    >
      {children}
    </motion.div>
  );
};

export { ImageComparison, ImageComparisonImage, ImageComparisonSlider };
