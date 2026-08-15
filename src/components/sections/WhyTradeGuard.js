export default function WhyTradeGuard() {
  return (
    <section className="band sectionPad">
      <div className="container">
        <div className="sectionHeading centered"><span className="kicker">Why TradeGuard</span><h2>A journal reviews the past. TradeGuard guards the present.</h2></div>
        <div className="comparisonGrid">
          <article><span>Trading journal</span><h3>Review &amp; analysis</h3><p>Explains what happened after the session. Essential for learning — but it acts once the trades are already done.</p><small><i className="dot dotMuted" />After the trade</small></article>
          <article className="tradeguardCompare"><span>TradeGuard</span><h3>Rules &amp; protection</h3><p>Helps protect your discipline while the session is happening. Complementary to a journal, fundamentally different in purpose.</p><small><i className="dot dotCyan" />During the session</small></article>
        </div>
      </div>
    </section>
  );
}
