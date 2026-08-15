import Brand from "@/components/ui/Brand";
import { ModalButton } from "@/components/ui/ModalProvider";

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerInner">
        <div className="footerColumns">
          <div className="footerBrand">
            <a href="#top" aria-label="TradeGuard home"><Brand compact /></a>
            <p>A trading discipline and risk-protection system for futures traders. Set your rules, monitor your account, protect your session.</p>
          </div>
          <FooterColumn title="Product" links={[["Product", "#product"], ["How It Works", "#how"], ["Tradovate Integration", "#integration"], ["Security", "#security"], ["FAQ", "#faq"]]} />
          <FooterColumn title="Legal" links={[["Privacy Policy", "/privacy"], ["Terms of Service", "/terms"]]} />
          <div className="footerColumn">
            <span className="footerTitle">Contact</span>
            <a href="mailto:hello@tradeguard.app">hello@tradeguard.app</a>
            <ModalButton modal="contact" className="footerContact">Contact form</ModalButton>
          </div>
        </div>
        <div className="footerFinePrint">
          <p>TradeGuard is an independent software product and is not affiliated with or endorsed by Tradovate or NinjaTrader unless explicitly stated otherwise.</p>
          <p>Trading futures involves substantial risk and is not suitable for every investor.</p>
          <span>© 2026 TradeGuard. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div className="footerColumn">
      <span className="footerTitle">{title}</span>
      {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
    </div>
  );
}
