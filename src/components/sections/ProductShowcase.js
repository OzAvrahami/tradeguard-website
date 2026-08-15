import ProductWindow from "@/components/ui/ProductWindow";

const left = [
  ["Trading Session Status", "Open, monitored, or locked — at a glance.", ""],
  ["Current P&L", "Read-only, live from your account.", "green"],
  ["Account Connection", "OAuth-linked, read-only status.", "blue"],
];
const right = [
  ["Profit Protection", "Locks in a floor of the day's gains.", "green"],
  ["Rule Status", "Every active rule and how close it is.", ""],
  ["Protection Status", "Local service confirmed running.", ""],
];

export default function ProductShowcase() {
  return (
    <section className="showcaseBand sectionPad">
      <div className="container">
        <div className="sectionHeading centered"><span className="kicker">The product</span><h2>A real desktop app, always in the corner.</h2><p>TradeGuard runs as a lightweight Windows application beside your trading platform — monitoring, never intervening in your orders.</p></div>
        <div className="showcase">
          <Callouts items={left} side="left" />
          <ProductWindow showcase />
          <Callouts items={right} side="right" />
        </div>
      </div>
    </section>
  );
}

function Callouts({ items, side }) {
  return <div className={`callouts callouts-${side}`}>{items.map(([title, copy, tone]) => <div key={title}><strong className={tone ? `text-${tone}` : ""}>{title}</strong><span>{copy}</span></div>)}</div>;
}
