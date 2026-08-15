const rules = [
  {
    title: "Maximum Daily Loss", icon: "↓", tone: "red", badge: "Approaching Limit", badgeTone: "amber",
    copy: "Set the maximum you're willing to lose in a day. When the limit is reached, TradeGuard can activate your configured protection.",
    metrics: [["Limit", "−$500", ""], ["Current P&L", "−$472", "amber"]],
    progress: "94%", progressLabel: "94% of daily loss limit used", progressTone: "loss",
  },
  {
    title: "Profit Protection", icon: "◇", tone: "green", badge: "Protection Active", badgeTone: "green",
    copy: "Reach a strong profit and TradeGuard can protect part of the day's gains once a configured threshold is crossed.",
    metrics: [["Session High", "+$850", ""], ["Protected Floor", "+$500", "green"], ["Current", "+$520", "green"]],
  },
  {
    title: "Daily Profit Target", icon: "◎", tone: "blue", badge: "Target Reached", badgeTone: "blue",
    copy: "Define when the planned objective for the day has been reached, so you can step away with the session won.",
    metrics: [["Daily Target", "+$750", ""], ["Current P&L", "+$768", "blue"]],
    progress: "100%", progressLabel: "102% of daily target reached", progressTone: "target",
  },
  {
    title: "Maximum Trades", icon: "▦", tone: "neutral", badge: "1 Remaining", badgeTone: "amber",
    copy: "Cap the number of trades per session to prevent overtrading after the plan for the day is done.",
    metrics: [["Maximum", "6", ""], ["Used", "5", ""], ["Remaining", "1", "amber"]], segments: 6,
  },
];

export default function RiskRules() {
  return (
    <section className="sectionPad">
      <div className="container">
        <div className="sectionHeading left narrow"><span className="kicker">Risk &amp; discipline rules</span><h2>The rules you set, working as designed.</h2><p>Every rule maps to a live monitor inside the app. These are the same cards traders see during a session.</p></div>
        <div className="rulesGrid">
          {rules.map((rule) => <RuleCard key={rule.title} {...rule} />)}
        </div>
      </div>
    </section>
  );
}

function RuleCard({ title, icon, tone, badge, badgeTone, copy, metrics, progress, progressLabel, progressTone, segments }) {
  return (
    <article className={`ruleCard ${tone === "green" ? "ruleGreen" : ""}`}>
      <div className="ruleHeader"><div><span className={`ruleIcon tone-${tone}`}>{icon}</span><h3>{title}</h3></div><span className={`badge badge-${badgeTone}`}>{badge}</span></div>
      <p>{copy}</p>
      <div className="metricGrid">
        {metrics.map(([label, value, valueTone]) => <div className={`metric ${valueTone ? `metric-${valueTone}` : ""}`} key={label}><span>{label}</span><strong>{value}</strong></div>)}
      </div>
      {progress && <div className="progressArea"><div className="progressTrack"><span className={`progressBar progress-${progressTone}`} style={{ width: progress }} /></div><small>{progressLabel}</small></div>}
      {segments && <div className="segmentBar" aria-label="5 of 6 trades used">{Array.from({ length: segments }, (_, i) => <i className={i < 5 ? "used" : ""} key={i} />)}</div>}
    </article>
  );
}
