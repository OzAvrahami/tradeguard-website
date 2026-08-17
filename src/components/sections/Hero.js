import { ModalButton } from "@/components/ui/ModalProvider";
import ProductWindow from "@/components/ui/ProductWindow";

export default function Hero() {
  return (
    <section className="hero sectionPad">
      <div className="heroGrid" aria-hidden="true" />
      <div className="container heroInner">
        <div className="heroCopy">
          <span className="eyebrowPill"><i className="dot dotGreen" />Windows desktop · Private beta</span>
          <h1>Protect your trading discipline.</h1>
          <p className="heroLead">LimitPact helps futures traders define their risk rules before the session begins — and enforce them when emotions take over.</p>
          <div className="heroMantra"><span>Set your limits.</span><i>·</i><span>Monitor your account.</span><i>·</i><span>Protect your discipline.</span></div>
          <div className="ctaRow">
            <ModalButton modal="beta" className="button buttonPrimary buttonLarge">Join Private Beta</ModalButton>
            <a className="button buttonSecondary buttonLarge" href="#how">See How It Works <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div className="heroProduct"><ProductWindow /></div>
      </div>
    </section>
  );
}
