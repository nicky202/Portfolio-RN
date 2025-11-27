"use client";

import { motion } from "framer-motion";

// Reusable geometric shape components
export function Circle({ size = 20, color = "bg-geoYellow", className = "" }) {
  return (
    <div
      className={`rounded-full ${color} ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

export function Square({ size = 20, color = "bg-geoPink", className = "" }) {
  return (
    <div
      className={`${color} ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

export function Triangle({ size = 20, color = "bg-geoCyan", className = "" }) {
  return (
    <div
      className={`${color} ${className}`}
      style={{
        width: 0,
        height: 0,
        borderLeft: `${size / 2}px solid transparent`,
        borderRight: `${size / 2}px solid transparent`,
        borderBottom: `${size}px solid`,
        borderBottomColor: color.includes("bg-") ? undefined : color,
      }}
    />
  );
}

export function Diamond({ size = 20, color = "bg-geoRed", className = "" }) {
  return (
    <div
      className={`${color} ${className}`}
      style={{
        width: size,
        height: size,
        clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
      }}
    />
  );
}

export function Cross({ size = 20, color = "bg-geoCyan", className = "" }) {
  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      <div
        className={`absolute ${color}`}
        style={{
          width: size,
          height: size / 4,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        className={`absolute ${color}`}
        style={{
          width: size / 4,
          height: size,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}

export function Arrow({
  direction = "right",
  size = 20,
  color = "bg-geoYellow",
  className = "",
}) {
  const directions = {
    right: "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)",
    left: "polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)",
    up: "polygon(50% 0%, 100% 25%, 100% 100%, 0% 100%, 0% 25%)",
    down: "polygon(50% 100%, 100% 75%, 100% 0%, 0% 0%, 0% 75%)",
  };

  return (
    <div
      className={`${color} ${className}`}
      style={{
        width: size,
        height: size,
        clipPath: directions[direction as keyof typeof directions],
      }}
    />
  );
}

export function Zigzag({
  width = 40,
  height = 20,
  color = "bg-geoYellow",
  className = "",
}) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox={`0 0 ${width} ${height}`}
    >
      <path
        d={`M 0 ${height / 2} L ${width / 4} 0 L ${width / 2} ${height} L ${
          (width * 3) / 4
        } 0 L ${width} ${height / 2}`}
        stroke={color.includes("bg-") ? undefined : color}
        strokeWidth="2"
        fill="none"
        className={
          color.includes("bg-")
            ? `stroke-current ${color.replace("bg-", "text-")}`
            : ""
        }
      />
    </svg>
  );
}

export function Dots({
  count = 3,
  size = 8,
  color = "bg-geoPink",
  className = "",
}) {
  return (
    <div className={`flex gap-2 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`rounded-full ${color}`}
          style={{ width: size, height: size }}
        />
      ))}
    </div>
  );
}
