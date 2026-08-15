const items = [
  ["shield", "Read-only account access"],
  ["lock", "Local protection enforcement"],
  ["clock", "Real-time P&L monitoring"],
  ["oauth", "Built to integrate with Tradovate"],
];

export default function TrustStrip() {
  return (
    <div className="trustStrip">
      <div className="container trustStripInner">
        {items.map(([icon, label]) => <span key={label}><i className={`miniIcon ${icon}`}>{icon === "oauth" ? "OAuth" : icon === "lock" ? "▣" : icon === "clock" ? "◷" : "◇"}</i>{label}</span>)}
      </div>
    </div>
  );
}
