/** Subtle drifting Akatsuki-style red cloud shapes in background */
const AkatsukiClouds = () => {
  const clouds = [
    { top: "10%", duration: "60s", delay: "0s", opacity: 0.04, scale: 1 },
    { top: "35%", duration: "80s", delay: "15s", opacity: 0.03, scale: 0.7 },
    { top: "65%", duration: "70s", delay: "30s", opacity: 0.035, scale: 0.85 },
    { top: "85%", duration: "90s", delay: "5s", opacity: 0.025, scale: 0.6 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {clouds.map((c, i) => (
        <div
          key={i}
          className="absolute animate-cloud-drift"
          style={{
            top: c.top,
            opacity: c.opacity,
            ["--cloud-duration" as string]: c.duration,
            ["--cloud-delay" as string]: c.delay,
            transform: `scale(${c.scale})`,
          }}
        >
          {/* Akatsuki cloud SVG shape */}
          <svg width="200" height="100" viewBox="0 0 200 100" fill="none">
            <ellipse cx="60" cy="55" rx="55" ry="35" fill="hsl(0, 85%, 45%)" />
            <ellipse cx="140" cy="55" rx="55" ry="35" fill="hsl(0, 85%, 45%)" />
            <ellipse cx="100" cy="45" rx="40" ry="30" fill="hsl(0, 85%, 45%)" />
            {/* Inner outline */}
            <ellipse cx="60" cy="55" rx="45" ry="25" fill="none" stroke="hsl(0, 0%, 4%)" strokeWidth="3" />
            <ellipse cx="140" cy="55" rx="45" ry="25" fill="none" stroke="hsl(0, 0%, 4%)" strokeWidth="3" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default AkatsukiClouds;
