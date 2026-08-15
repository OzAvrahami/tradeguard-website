"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

const ModalContext = createContext(null);

export function useTradeGuardModal() {
  const value = useContext(ModalContext);
  if (!value) throw new Error("useTradeGuardModal must be used inside ModalProvider");
  return value;
}

export function ModalProvider({ children }) {
  const [modal, setModal] = useState(null);
  const [sent, setSent] = useState(false);
  const contentRef = useRef(null);
  const closeRef = useRef(null);
  const triggerRef = useRef(null);

  const openModal = (type) => {
    triggerRef.current = document.activeElement;
    setSent(false);
    setModal(type);
  };

  const closeModal = () => {
    setModal(null);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  };

  useEffect(() => {
    if (!modal) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
      if (event.key !== "Tab" || !contentRef.current) return;
      const focusable = contentRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [modal]);

  return (
    <ModalContext.Provider value={{ openModal }}>
      <div aria-hidden={modal ? "true" : undefined} inert={modal ? "" : undefined}>
        {children}
      </div>
      {modal && (
        <div className="modalOverlay" onMouseDown={closeModal}>
          <div
            ref={contentRef}
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              ref={closeRef}
              className="modalClose"
              type="button"
              onClick={closeModal}
              aria-label="Close dialog"
            >
              ×
            </button>
            {sent ? (
              <Success type={modal} />
            ) : modal === "beta" ? (
              <BetaForm onSuccess={() => setSent(true)} />
            ) : (
              <ContactForm onSuccess={() => setSent(true)} />
            )}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
}

export function ModalButton({ modal, className = "", children }) {
  const { openModal } = useTradeGuardModal();
  return (
    <button type="button" className={className} onClick={() => openModal(modal)}>
      {children}
    </button>
  );
}

function Success({ type }) {
  const isBeta = type === "beta";
  return (
    <div className="formSuccess" role="status">
      <span className="successIcon" aria-hidden="true">✓</span>
      <h3 id="modal-title">{isBeta ? "You're on the list" : "Message received"}</h3>
      <p>
        {isBeta
          ? "Thanks for your interest in the TradeGuard private beta. We'll reach out as spots open up."
          : "Thanks for reaching out. We'll reply to your email as soon as we can."}
      </p>
    </div>
  );
}

function BetaForm({ onSuccess }) {
  return (
    <form className="modalForm" onSubmit={(event) => { event.preventDefault(); onSuccess(); }}>
      <div className="formIntro">
        <h3 id="modal-title">Join the private beta</h3>
        <p>Tell us where you trade and we&apos;ll be in touch. No account is created yet.</p>
      </div>
      <Field label="Name" id="beta-name">
        <input id="beta-name" name="name" required autoComplete="name" placeholder="Your name" />
      </Field>
      <Field label="Email" id="beta-email">
        <input id="beta-email" name="email" required type="email" autoComplete="email" placeholder="you@example.com" />
      </Field>
      <Field label="Trading platform" id="beta-platform">
        <select id="beta-platform" name="platform" defaultValue="Tradovate">
          <option>Tradovate</option>
          <option>NinjaTrader</option>
          <option>Other</option>
        </select>
      </Field>
      <button className="button buttonPrimary formSubmit" type="submit">Request beta access</button>
    </form>
  );
}

function ContactForm({ onSuccess }) {
  return (
    <form className="modalForm" onSubmit={(event) => { event.preventDefault(); onSuccess(); }}>
      <div className="formIntro">
        <h3 id="modal-title">Contact TradeGuard</h3>
        <p>For traders and integration partners alike. We read every message.</p>
      </div>
      <Field label="Name" id="contact-name">
        <input id="contact-name" name="name" required autoComplete="name" placeholder="Your name" />
      </Field>
      <Field label="Email" id="contact-email">
        <input id="contact-email" name="email" required type="email" autoComplete="email" placeholder="you@example.com" />
      </Field>
      <Field label="Message" id="contact-message">
        <textarea id="contact-message" name="message" required rows="4" placeholder="How can we help?" />
      </Field>
      <button className="button buttonPrimary formSubmit" type="submit">Send message</button>
    </form>
  );
}

function Field({ label, id, children }) {
  return (
    <label className="formField" htmlFor={id}>
      <span>{label}</span>
      {children}
    </label>
  );
}
