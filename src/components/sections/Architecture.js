const flow = [
  ["Account Data", "from Tradovate", "blue"],
  ["Monitoring", "TradeGuard reads", "neutral"],
  ["Risk Rules", "your definitions", "neutral"],
  ["Rule Trigger", "threshold met", "amber"],
  ["Local Protection", "enforced on device", "green"],
];

export default function Architecture() {
  return (
    <section className="band sectionPad">
      <div className="container twoCol architectureGrid">
        <div className="sectionCopy">
          <span className="kicker">Architecture</span>
          <h2>Account data comes from Tradovate.<br /><em>Protection happens on your machine.</em></h2>
          <p>The Tradovate integration supplies the account information TradeGuard needs. TradeGuard evaluates that information against your predefined rules, and the protection mechanism is enforced locally on your computer.</p>
          <p className="smallCopy">Tradovate is never asked to lock your account or to cancel orders. The distinction between <strong>account monitoring</strong> and <strong>local enforcement</strong> is deliberate and complete.</p>
        </div>
        <div className="architecturePanel">
          <div className="sideCards">
            <div className="sideCard readSide"><span>Read side</span><strong>Account monitoring</strong><small>P&amp;L and activity, read-only via OAuth.</small></div>
            <div className="sideCard actSide"><span>Act side</span><strong>Local enforcement</strong><small>The restriction runs on your PC.</small></div>
          </div>
          <div className="architectureFlow">
            {flow.map(([label, description, tone]) => <div key={label} className={`arch-${tone}`}><strong>{label}</strong><i /><span>{description}</span></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
