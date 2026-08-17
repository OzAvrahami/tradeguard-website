const points = [
  "OAuth-based authentication",
  "No Tradovate password storage",
  "Read-only account permissions",
  "No API order execution",
  "Local protection enforcement",
  "Minimal required account data",
];

export default function Security() {
  return (
    <section id="security" className="sectionPad anchorSection">
      <div className="container">
        <div className="sectionHeading left narrow"><span className="kicker">Security &amp; privacy</span><h2>Your trading account stays yours.</h2><p>LimitPact is designed with a conservative, minimal-access posture. The product requests only what its protection rules require — and nothing more.</p></div>
        <div className="securityGrid">{points.map((point) => <div key={point}><span aria-hidden="true">✓</span><strong>{point}</strong></div>)}</div>
        <p className="securityNote">LimitPact makes no claim of third-party certification. Security practices will be documented as the product matures and are described here only where accurate today.</p>
      </div>
    </section>
  );
}
