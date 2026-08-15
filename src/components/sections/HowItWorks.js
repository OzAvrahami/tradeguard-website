const steps = [
  ["01", "≡", "Define your rules", "Set your limits before emotions enter the equation — Maximum Daily Loss, Daily Profit Target, Profit Protection, Maximum Trades."],
  ["02", "⌁", "Connect your account", "Securely connect a supported trading account. For Tradovate, the planned integration uses the official OAuth authorization flow."],
  ["03", "⌁", "Monitor in real time", "TradeGuard monitors relevant account activity and P&L against your predefined rules throughout the session."],
  ["04", "▣", "Protect the session", "When a rule is triggered, TradeGuard activates the configured protection mechanism locally on your computer."],
];

export default function HowItWorks() {
  return (
    <section id="how" className="band sectionPad anchorSection">
      <div className="container">
        <div className="sectionHeading centered"><span className="kicker">How it works</span><h2>Four steps, one outcome: control.</h2></div>
        <div className="stepsGrid">
          {steps.map(([number, icon, title, copy], index) => (
            <article className={`stepCard ${index === 3 ? "stepFinal" : ""}`} key={number}>
              <span className="stepNumber">{number}</span><span className="stepIcon">{icon}</span><h3>{title}</h3><p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
