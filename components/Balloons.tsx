const balloons = [
  { color: "#FF4D8D", left: "6%", delay: "0s", size: 46 },
  { color: "#35C4F0", left: "82%", delay: "0.8s", size: 38 },
  { color: "#FFC93C", left: "18%", delay: "1.6s", size: 34 },
  { color: "#7B2FF7", left: "68%", delay: "0.4s", size: 50 },
  { color: "#21D19F", left: "90%", delay: "1.2s", size: 30 },
];

export default function Balloons() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {balloons.map((b, i) => (
        <div
          key={i}
          className="absolute top-[8%] animate-floatUp opacity-70"
          style={{ left: b.left, animationDelay: b.delay }}
        >
          <svg width={b.size} height={b.size * 1.3} viewBox="0 0 40 52">
            <ellipse cx="20" cy="20" rx="20" ry="22" fill={b.color} />
            <path
              d="M20 42 L20 52"
              stroke={b.color}
              strokeWidth="1.5"
              opacity="0.6"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
