"use client";

import { useState } from "react";

const faqs = [
  ["Does LimitPact place trades?", "No. LimitPact does not require API permission to submit, modify, or cancel orders. It reads account information for monitoring only."],
  ["Does LimitPact need my Tradovate password?", "No. The planned Tradovate integration uses the official OAuth authorization flow, so you authenticate directly with Tradovate and never share your password with LimitPact."],
  ["What Tradovate data does LimitPact need?", "Read-only account information required to monitor account activity and real-time P&L used by LimitPact's protection rules — nothing more."],
  ["What happens when a rule is triggered?", "LimitPact activates the configured protection mechanism locally on your computer. Tradovate is not asked to lock your account or cancel orders."],
  ["Is LimitPact a trading bot?", "No. LimitPact does not decide when to enter or exit trades. It focuses on enforcing the discipline and risk rules you define yourself."],
  ["Is LimitPact available now?", "LimitPact is currently under active development and preparing for private beta. Join the beta list to be notified as access opens up."],
];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <section id="faq" className="band sectionPad anchorSection">
      <div className="faqInner">
        <div className="sectionHeading centered"><span className="kicker">FAQ</span><h2>Questions traders and reviewers ask.</h2></div>
        <div className="accordion">
          {faqs.map(([question, answer], index) => {
            const open = openFaq === index;
            return (
              <article className="faqItem" key={question}>
                <h3><button type="button" aria-expanded={open} aria-controls={`faq-panel-${index}`} onClick={() => setOpenFaq(open ? -1 : index)}><span>{question}</span><i className={open ? "open" : ""}>⌄</i></button></h3>
                <div id={`faq-panel-${index}`} className={`faqAnswer ${open ? "faqAnswerOpen" : ""}`} aria-hidden={!open}><p>{answer}</p></div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
