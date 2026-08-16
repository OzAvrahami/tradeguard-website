import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Terms of Service — TradeGuard",
  description:
    "Terms governing use of the TradeGuard website, desktop application, private beta, and related services.",
};

export default function TermsOfService() {
  return (
    <>
      <Header />
      <main className="legalPage">
        <header className="legalHero sectionPad">
          <div className="legalContainer">
            <Link className="legalBack" href="/">← Back to TradeGuard</Link>
            <span className="kicker">Legal</span>
            <h1>Terms of Service</h1>
            <div className="legalDates">
              <span><strong>Effective Date:</strong> August 15, 2026</span>
              <span><strong>Last Updated:</strong> August 15, 2026</span>
            </div>
            <p>These Terms of Service (&quot;Terms&quot;) govern your access to and use of the TradeGuard website, desktop application, private beta, account integrations, and related services (collectively, the <strong>&quot;Services&quot;</strong>).</p>
            <p>TradeGuard is a software product operated by <strong>Oz Avrahami</strong>, an individual based in Israel (&quot;TradeGuard&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).</p>
            <p>By accessing or using the Services, you agree to these Terms.</p>
            <p>If you do not agree, do not use the Services.</p>
          </div>
        </header>

        <div className="legalBody sectionPad">
          <article className="legalContainer legalArticle">
            <LegalSection number="1" title="Eligibility">
              <p>You must be at least <strong>18 years old</strong> to use TradeGuard.</p>
              <p>By using the Services, you represent that:</p>
              <ul>
                <li>you are at least 18 years old;</li>
                <li>you have legal capacity to enter into these Terms; and</li>
                <li>your use of the Services is permitted under the laws applicable to you.</li>
              </ul>
              <p>You are responsible for determining whether futures trading and the use of TradeGuard are lawful and appropriate in your jurisdiction.</p>
            </LegalSection>

            <LegalSection number="2" title="What TradeGuard Does">
              <p>TradeGuard is a trading discipline and risk-protection software product.</p>
              <p>It allows traders to define personal trading rules and monitor relevant trading-account information against those rules.</p>
              <p>Features may include rules such as:</p>
              <ul>
                <li>Maximum Daily Loss;</li>
                <li>Daily Profit Target;</li>
                <li>Profit Protection;</li>
                <li>Maximum Trades; and</li>
                <li>other configurable discipline or risk limits.</li>
              </ul>
              <p>When configured conditions are met, TradeGuard may activate a <strong>local protection mechanism on the user&apos;s computer</strong>.</p>
              <p>TradeGuard is intended to help users follow rules that they define for themselves.</p>
            </LegalSection>

            <LegalSection number="3" title="What TradeGuard Does Not Do">
              <p>TradeGuard is not:</p>
              <ul>
                <li>a brokerage service;</li>
                <li>an exchange;</li>
                <li>a futures commission merchant;</li>
                <li>a trading signal service;</li>
                <li>a copy-trading service;</li>
                <li>a trading bot; or</li>
                <li>a personalized financial or investment advisory service.</li>
              </ul>
              <p>TradeGuard does not decide which futures contracts you should buy or sell.</p>
              <p>TradeGuard does not promise that any trading rule, strategy, or protection setting will produce profits or prevent losses.</p>
            </LegalSection>

            <LegalSection number="4" title="Futures Trading Risk">
              <p>Trading futures involves substantial risk and may result in significant financial loss.</p>
              <p>No software can eliminate trading risk.</p>
              <p>You remain solely responsible for:</p>
              <ul>
                <li>every trading decision;</li>
                <li>every order submitted through your trading platform;</li>
                <li>the size of your positions;</li>
                <li>your account risk;</li>
                <li>compliance with broker, exchange, prop-firm, and regulatory rules; and</li>
                <li>determining whether trading is appropriate for you.</li>
              </ul>
              <p>TradeGuard should <strong>never be used as your sole risk-control mechanism</strong>.</p>
              <p>You should maintain appropriate broker-level, platform-level, financial, and personal risk controls independently of TradeGuard.</p>
            </LegalSection>

            <LegalSection number="5" title="Local Protection Is Not an Account-Level Lock">
              <p>TradeGuard&apos;s protection mechanism operates locally on the device where TradeGuard is installed.</p>
              <p>A TradeGuard protection state does <strong>not</strong> necessarily:</p>
              <ul>
                <li>lock your brokerage account;</li>
                <li>prevent trading from another computer;</li>
                <li>prevent trading from another mobile device;</li>
                <li>prevent trading through another application;</li>
                <li>prevent telephone orders;</li>
                <li>prevent trading through another brokerage account; or</li>
                <li>create a broker-level or exchange-level restriction.</li>
              </ul>
              <p>You are responsible for understanding the scope and limitations of your configured protection.</p>
            </LegalSection>

            <LegalSection number="6" title="Protection May Fail">
              <p>Software and computer systems can fail.</p>
              <p>TradeGuard does not guarantee that a configured protection mechanism will activate, remain active, or prevent trading under every circumstance.</p>
              <p>Protection may be affected by circumstances including:</p>
              <ul>
                <li>application crashes;</li>
                <li>operating-system changes;</li>
                <li>insufficient permissions;</li>
                <li>network outages;</li>
                <li>third-party platform changes;</li>
                <li>browser or application updates;</li>
                <li>broker or API outages;</li>
                <li>delayed or incorrect account data;</li>
                <li>device failure;</li>
                <li>user configuration;</li>
                <li>security software;</li>
                <li>changes made by the user; or</li>
                <li>other technical conditions outside TradeGuard&apos;s reasonable control.</li>
              </ul>
              <p>You must not assume that TradeGuard has successfully restricted trading merely because a rule was configured.</p>
            </LegalSection>

            <LegalSection number="7" title="Account Monitoring and Tradovate Integration">
              <p>TradeGuard is being developed to support authorized integrations with trading platforms such as Tradovate.</p>
              <p>The planned Tradovate integration is designed around:</p>
              <ul>
                <li>OAuth authentication;</li>
                <li>read-only account access;</li>
                <li>account activity and P&amp;L monitoring; and</li>
                <li>local TradeGuard protection.</li>
              </ul>
              <p>TradeGuard does not require Tradovate API permission to:</p>
              <ul><li>place orders;</li><li>modify orders; or</li><li>cancel orders.</li></ul>
              <p>TradeGuard does not submit trades through the Tradovate API under the currently described integration model.</p>
              <p>You are responsible for ensuring that you are authorized to connect any account you add to TradeGuard.</p>
            </LegalSection>

            <LegalSection number="8" title="Third-Party Services">
              <p>TradeGuard may interact with third-party platforms, brokers, APIs, websites, or services.</p>
              <p>Third-party services are controlled by their respective providers and may change, suspend, restrict, or discontinue functionality at any time.</p>
              <p>TradeGuard does not control and is not responsible for:</p>
              <ul>
                <li>third-party uptime;</li>
                <li>API availability;</li>
                <li>account restrictions;</li>
                <li>authentication systems;</li>
                <li>market-data accuracy;</li>
                <li>broker policies;</li>
                <li>third-party fees;</li>
                <li>trading-platform changes; or</li>
                <li>actions taken by a third-party provider.</li>
              </ul>
              <p>Your use of third-party services remains subject to their own agreements and policies.</p>
              <p><strong>TradeGuard is an independent software product and is not affiliated with or endorsed by Tradovate or NinjaTrader unless explicitly stated otherwise.</strong></p>
            </LegalSection>

            <LegalSection number="9" title="Private Beta">
              <p>TradeGuard is currently under active development and may be offered as a private beta.</p>
              <p>During the beta:</p>
              <ul>
                <li>functionality may be incomplete;</li>
                <li>features may change;</li>
                <li>bugs may exist;</li>
                <li>availability may be interrupted;</li>
                <li>integrations may be experimental or unavailable;</li>
                <li>data formats may change; and</li>
                <li>features may be added or removed without notice.</li>
              </ul>
              <p>The current private beta may be provided free of charge.</p>
              <p>Free beta access does not create a right to future free access.</p>
              <p>If paid plans are introduced, pricing and additional terms will be presented before a user is charged.</p>
            </LegalSection>

            <LegalSection number="10" title="User Responsibilities">
              <p>You agree to:</p>
              <ul>
                <li>provide accurate information where reasonably required;</li>
                <li>use only trading accounts you are authorized to access;</li>
                <li>protect your devices and credentials;</li>
                <li>configure TradeGuard carefully;</li>
                <li>independently verify important risk settings;</li>
                <li>maintain other appropriate risk controls;</li>
                <li>comply with applicable laws and third-party agreements; and</li>
                <li>use the Services only for lawful purposes.</li>
              </ul>
              <p>You are responsible for reviewing TradeGuard&apos;s current status before relying on any displayed information.</p>
            </LegalSection>

            <LegalSection number="11" title="Prohibited Uses">
              <p>You may not:</p>
              <ul>
                <li>use TradeGuard for unlawful purposes;</li>
                <li>attempt to bypass or defeat TradeGuard security controls;</li>
                <li>gain unauthorized access to another user&apos;s account or data;</li>
                <li>introduce malware or harmful code;</li>
                <li>interfere with the operation of the Services;</li>
                <li>scrape or access the Services through abusive automated means;</li>
                <li>reverse engineer, decompile, or disassemble TradeGuard except where applicable law expressly permits it;</li>
                <li>copy, redistribute, sublicense, or commercially exploit TradeGuard without permission;</li>
                <li>use the Services to violate broker, exchange, prop-firm, or platform rules;</li>
                <li>misrepresent an affiliation with TradeGuard; or</li>
                <li>use TradeGuard in a manner that harms TradeGuard, its users, or third parties.</li>
              </ul>
            </LegalSection>

            <LegalSection number="12" title="Intellectual Property">
              <p>TradeGuard, including its software, website, branding, logos, interface designs, text, graphics, and original content, is owned by or licensed to TradeGuard and is protected by applicable intellectual-property laws.</p>
              <p>These Terms grant you a limited, revocable, non-exclusive, non-transferable right to use the Services for their intended purpose.</p>
              <p>No ownership rights are transferred to you.</p>
              <p>The names and trademarks of third-party products remain the property of their respective owners.</p>
            </LegalSection>

            <LegalSection number="13" title="Feedback">
              <p>If you voluntarily provide suggestions, bug reports, feature ideas, or other feedback about TradeGuard, you grant TradeGuard permission to use that feedback to develop and improve the Services without an obligation to compensate you.</p>
              <p>This does not transfer ownership of personal information contained in feedback.</p>
            </LegalSection>

            <LegalSection number="14" title="Privacy">
              <p>Our collection and use of personal information is described in the <strong><Link href="/privacy">TradeGuard Privacy Policy</Link></strong>.</p>
              <p>By using the Services, you acknowledge that information may be processed as described in that Policy.</p>
            </LegalSection>

            <LegalSection number="15" title="Availability and Changes">
              <p>We may:</p>
              <ul>
                <li>modify the Services;</li>
                <li>add or remove features;</li>
                <li>change technical requirements;</li>
                <li>suspend parts of the Services;</li>
                <li>discontinue beta features; or</li>
                <li>stop offering a Service,</li>
              </ul>
              <p>subject to applicable law.</p>
              <p>We do not guarantee uninterrupted or error-free availability.</p>
              <p>Where reasonably practical, we may provide notice of material changes.</p>
            </LegalSection>

            <LegalSection number="16" title="Suspension and Termination">
              <p>We may suspend or terminate access where reasonably necessary, including if:</p>
              <ul>
                <li>you violate these Terms;</li>
                <li>your use creates a security or legal risk;</li>
                <li>you misuse the Services;</li>
                <li>continued operation becomes technically impractical; or</li>
                <li>a third-party dependency required for the Service becomes unavailable.</li>
              </ul>
              <p>You may stop using TradeGuard at any time.</p>
              <p>Termination does not affect provisions that by their nature should survive, including intellectual-property, disclaimer, liability, and governing-law provisions.</p>
            </LegalSection>

            <LegalSection number="17" title="No Financial Advice">
              <p>Information provided through TradeGuard is for software functionality and general informational purposes.</p>
              <p>Nothing in TradeGuard constitutes:</p>
              <ul>
                <li>personalized investment advice;</li>
                <li>a recommendation to buy or sell a financial instrument;</li>
                <li>a prediction of market performance;</li>
                <li>tax advice;</li>
                <li>legal advice; or</li>
                <li>financial-planning advice.</li>
              </ul>
              <p>You should obtain independent professional advice where appropriate.</p>
            </LegalSection>

            <LegalSection number="18" title="No Performance Guarantee">
              <p>Past trading performance does not guarantee future results.</p>
              <p>TradeGuard does not guarantee:</p>
              <ul>
                <li>profitability;</li>
                <li>reduced losses;</li>
                <li>improved trading performance;</li>
                <li>compliance with your trading plan;</li>
                <li>prevention of emotional trading;</li>
                <li>successful activation of every protection rule; or</li>
                <li>continuous availability of account data.</li>
              </ul>
              <p>Examples, P&amp;L figures, thresholds, and trading scenarios displayed on the website or in the application are illustrative unless expressly stated otherwise.</p>
            </LegalSection>

            <LegalSection number="19" title="Disclaimer of Warranties">
              <p>To the maximum extent permitted by applicable law, the Services are provided <strong>&quot;as is&quot;</strong> and <strong>&quot;as available.&quot;</strong></p>
              <p>TradeGuard disclaims warranties that may otherwise be implied, including warranties of:</p>
              <ul>
                <li>merchantability;</li>
                <li>fitness for a particular purpose;</li>
                <li>non-infringement;</li>
                <li>uninterrupted availability;</li>
                <li>accuracy; and</li>
                <li>error-free operation,</li>
              </ul>
              <p>to the extent such warranties may lawfully be disclaimed.</p>
              <p>Nothing in these Terms excludes rights or warranties that cannot legally be excluded.</p>
            </LegalSection>

            <LegalSection number="20" title="Limitation of Liability">
              <p>To the maximum extent permitted by applicable law, TradeGuard and its operator will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages arising from or related to the Services.</p>
              <p>This includes, where legally permitted:</p>
              <ul>
                <li>trading losses;</li>
                <li>lost profits;</li>
                <li>missed trading opportunities;</li>
                <li>market losses;</li>
                <li>losses caused by delayed or inaccurate third-party data;</li>
                <li>losses resulting from failure of a protection mechanism;</li>
                <li>account restrictions;</li>
                <li>third-party outages;</li>
                <li>loss of data; or</li>
                <li>interruption of business or trading activity.</li>
              </ul>
              <p>TradeGuard is a supplementary discipline tool and not a substitute for your own risk-management systems.</p>
              <p>Nothing in these Terms limits liability where applicable law does not permit limitation or exclusion.</p>
            </LegalSection>

            <LegalSection number="21" title="Indemnification">
              <p>To the extent permitted by applicable law, you agree to indemnify and hold harmless TradeGuard and its operator from claims, damages, liabilities, costs, and expenses arising from:</p>
              <ul>
                <li>your unlawful use of the Services;</li>
                <li>your material violation of these Terms;</li>
                <li>your violation of another person&apos;s rights; or</li>
                <li>your unauthorized use of a trading account or third-party service.</li>
              </ul>
              <p>This section does not apply to the extent prohibited by applicable consumer law.</p>
            </LegalSection>

            <LegalSection number="22" title="Governing Law">
              <p>These Terms are governed by the laws of the <strong>State of Israel</strong>, without regard to conflict-of-law principles.</p>
              <p>Any dispute that cannot be resolved informally will be subject to the courts of competent jurisdiction in Israel, except where mandatory consumer or other applicable law gives you the right to bring a claim elsewhere.</p>
              <p>Nothing in these Terms removes mandatory rights that cannot legally be waived under the law applicable to you.</p>
            </LegalSection>

            <LegalSection number="23" title="Changes to These Terms">
              <p>We may update these Terms as TradeGuard develops.</p>
              <p>If changes are material, we will provide notice where reasonably appropriate or legally required.</p>
              <p>The updated Terms will state a new <strong>Last Updated</strong> date.</p>
              <p>Where applicable law requires affirmative consent to a change, we will request it.</p>
            </LegalSection>

            <LegalSection number="24" title="Entire Agreement">
              <p>These Terms, together with the Privacy Policy and any additional terms expressly presented for a specific Service, constitute the agreement governing your use of TradeGuard.</p>
              <p>If a provision is found unenforceable, the remaining provisions remain in effect to the extent permitted by law.</p>
              <p>Failure to enforce a provision does not waive the right to enforce it later.</p>
            </LegalSection>

            <LegalSection number="25" title="Contact">
              <p>Questions about these Terms may be sent to:</p>
              <address className="legalContact compact">
                <strong>TradeGuard</strong>
                <span>Operated by <strong>Oz Avrahami</strong></span>
                <span>Israel</span>
                <a href="mailto:hello@tradeguard.app">hello@tradeguard.app</a>
              </address>
            </LegalSection>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}

function LegalSection({ number, title, children }) {
  return (
    <section className="legalSection" aria-labelledby={`terms-${number}`}>
      <h2 id={`terms-${number}`}>{number}. {title}</h2>
      {children}
    </section>
  );
}
