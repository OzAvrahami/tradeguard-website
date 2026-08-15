import Image from "next/image";
import { ModalButton } from "@/components/ui/ModalProvider";

export default function FinalCTA() {
  return (
    <section className="finalCta sectionPad">
      <div className="finalCtaInner">
        <Image src="/brand/tradeguard-mark.png" alt="TradeGuard shield" width={56} height={56} />
        <h2>Trade with rules you can actually enforce.</h2>
        <p>TradeGuard is being built for futures traders who want stronger control over their risk, discipline, and trading behavior.</p>
        <div className="ctaRow"><ModalButton modal="beta" className="button buttonPrimary buttonLarge">Join Private Beta</ModalButton><ModalButton modal="contact" className="button buttonSecondary buttonLarge">Contact TradeGuard</ModalButton></div>
        <small>Currently under active development · preparing for private beta</small>
      </div>
    </section>
  );
}
