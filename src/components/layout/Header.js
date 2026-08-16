import Link from "next/link";
import Brand from "@/components/ui/Brand";
import { ModalButton } from "@/components/ui/ModalProvider";

const links = [
  ["Product", "/#product"],
  ["How It Works", "/#how"],
  ["Tradovate Integration", "/#integration"],
  ["Security", "/#security"],
  ["FAQ", "/#faq"],
];

export default function Header() {
  return (
    <header className="siteHeader">
      <div className="headerInner">
        <Link href="/" aria-label="TradeGuard home"><Brand /></Link>
        <nav className="desktopNav" aria-label="Primary navigation">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <span className="headerSpacer" />
        <ModalButton modal="contact" className="button buttonSecondary headerContact">Contact</ModalButton>
        <ModalButton modal="beta" className="button buttonPrimary headerBeta">Join Private Beta</ModalButton>
      </div>
    </header>
  );
}
