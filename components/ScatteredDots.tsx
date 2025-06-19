import React from "react";

interface DotWaveProps {
  dotSize?: number;
  gap?: number;
  count?: number;
  offset?: number;
}

const Scattered: React.FC<DotWaveProps> = ({
  dotSize = 8,
  gap = 80,
  count = 5,
  offset = 10,
}) => {
  const dots = Array.from({ length: count });

  return (
    <div className="flex items-center my-10 mx-5" style={{ gap: `${gap}px` }}>
      {dots.map((_, i) => (
        <div
          key={i}
          className="bg-black rounded-full"
          style={{
            width: `${dotSize}px`,
            height: `${dotSize}px`,
            transform: `translateY(${i % 2 === 0 ? offset : -offset}px)`,
          }}
        />
      ))}
    </div>
  );
};

export default Scattered;
