const flow = [
  { title: "Plan", copy: "You define the limits, calm and rational", tone: "blue", icon: "≡" },
  { title: "Trade & Emotion", copy: "The session moves; pressure builds", tone: "neutral", icon: "⌁" },
  { title: "Rule Trigger", copy: "A predefined limit is reached", tone: "amber", icon: "!" },
  { title: "Protection", copy: "LimitPact enforces your rule locally", tone: "green", icon: "✓" },
];

export default function Problem() {
  return (
    <section id="product" className="sectionPad anchorSection">
      <div className="container twoCol alignCenter">
        <div className="sectionCopy">
          <span className="kicker">The problem</span>
          <h2>Your trading plan is rational.<br /><em>Your worst decisions usually aren&apos;t.</em></h2>
          <p>Before the market opens, you know exactly where you should stop. After a losing trade, a winning streak, or a large unrealized profit, those predefined limits become much harder to respect.</p>
          <p>LimitPact turns the discipline rules you set while thinking clearly into safeguards that hold when emotion takes over.</p>
        </div>
        <div className="verticalFlow">
          {flow.map((item, index) => (
            <div className="flowGroup" key={item.title}>
              <div className={`flowCard flow-${item.tone}`}><span className="flowIcon">{item.icon}</span><div><strong>{item.title}</strong><small>{item.copy}</small></div></div>
              {index < flow.length - 1 && <span className="downArrow" aria-hidden="true">↓</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
