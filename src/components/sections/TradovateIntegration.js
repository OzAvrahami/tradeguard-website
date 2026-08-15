import Image from "next/image";

const nodes = [
  ["Trader", "Authorizes access, owns the account", "person", "neutral"],
  ["Tradovate OAuth", "Official authorization flow · no password shared", "API", "blue"],
  ["Read-Only Account Access", "Account activity & P&L only", "✓", "blue"],
  ["TradeGuard · Risk Engine", "Evaluates data against your rules", "brand", "neutral"],
  ["Local Protection", "Enforced on the trader's own computer", "▣", "green"],
];

const trust = [
  ["▣", "OAuth Authentication", "Users authenticate through the official authorization flow — never inside TradeGuard.", "blue"],
  ["◎", "Read-Only Access", "Only the account information required for monitoring is requested.", "blue"],
  ["⊣", "No Order Execution", "TradeGuard does not submit, modify, or cancel trades through the API.", "red"],
  ["◇", "No Password Storage", "TradeGuard does not collect or store your Tradovate username or password.", "green"],
];

export default function TradovateIntegration() {
  return (
    <section id="integration" className="sectionPad anchorSection">
      <div className="container">
        <div className="sectionHeading left integrationHeading"><span className="kicker">Tradovate integration</span><h2>Built for secure Tradovate integration.</h2><p>TradeGuard is being developed to connect to Tradovate through the official OAuth authorization flow. The integration is designed to use <strong>read-only account access</strong> to monitor the account activity and P&amp;L required by TradeGuard&apos;s protection rules.</p></div>
        <div className="integrationGrid">
          <div className="dataFlow">
            <span className="diagramLabel">Data flow · read only</span>
            {nodes.map(([title, copy, icon, tone], index) => (
              <div className="nodeGroup" key={title}>
                <div className={`dataNode node-${tone}`}>
                  {icon === "brand" ? <Image src="/brand/tradeguard-mark.png" alt="" width={34} height={34} /> : <span className="nodeIcon">{icon === "person" ? "○" : icon}</span>}
                  <div><strong>{title}</strong><small>{copy}</small></div>
                </div>
                {index < nodes.length - 1 && <span className={`nodeArrow ${index === nodes.length - 2 ? "greenArrow" : ""}`}>↓</span>}
              </div>
            ))}
          </div>
          <div className="permissions">
            <div className="permissionCard permissionRead"><span>What TradeGuard reads</span><strong>Account activity &amp; real-time P&amp;L</strong><p>Only the minimum account information the protection rules need to work.</p></div>
            <div className="permissionCard permissionNo"><span>TradeGuard does NOT request permission to</span><ul><li>Place orders</li><li>Modify orders</li><li>Cancel orders</li></ul><p>TradeGuard does not submit trades through the Tradovate API. Enforcement happens locally, never by instructing Tradovate.</p></div>
          </div>
        </div>
        <div className="trustCards">
          {trust.map(([icon, title, copy, tone]) => <article key={title}><span className={`trustIcon tone-${tone}`}>{icon}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </div>
    </section>
  );
}
