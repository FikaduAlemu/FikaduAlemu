import { useMemo, useRef, useState } from "react";

export default function TiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const [rotation, setRotation] = useState({ x: -6, y: 10 });

  const style = useMemo(
    () => ({
      transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
    }),
    [rotation],
  );

  function handleMove(event) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    setRotation({
      x: Math.max(-18, Math.min(18, y * -22)),
      y: Math.max(-18, Math.min(18, x * 22)),
    });
  }

  function resetRotation() {
    setRotation({ x: -6, y: 10 });
  }

  return (
    <div className="perspective-2000">
      <div
        ref={ref}
        className={`transform-gpu rounded-[2rem] transition duration-300 ease-out will-change-transform motion-reduce:transform-none ${className}`}
        style={style}
        onMouseMove={handleMove}
        onMouseLeave={resetRotation}
      >
        {children}
      </div>
    </div>
  );
}
