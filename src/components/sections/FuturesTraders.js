const tags = ["Futures trading", "Intraday trading", "Prop trading", "Tradovate integration planned", "Risk-conscious traders", "Rule-based discipline"];

export default function FuturesTraders() {
  return (
    <section className="futures sectionPad">
      <div className="container sectionHeading centered"><span className="kicker">Built for futures traders</span><h2>Purpose-built for the way active traders actually work.</h2><div className="tagCloud">{tags.map((tag) => <span className={tag.includes("Tradovate") ? "tagFeatured" : ""} key={tag}>{tag}</span>)}</div></div>
    </section>
  );
}
