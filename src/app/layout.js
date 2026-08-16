import { Assistant, JetBrains_Mono } from "next/font/google";
import { ModalProvider } from "@/components/ui/ModalProvider";
import BackToTop from "@/components/ui/BackToTop";
import "./globals.css";

const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "TradeGuard — Trading Discipline & Risk Protection",
  description:
    "TradeGuard helps futures traders define, monitor, and enforce personal trading discipline and risk rules.",
  icons: {
    icon: "/brand/tradeguard.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${assistant.variable} ${jetBrainsMono.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <ModalProvider>
          {children}
          <BackToTop />
        </ModalProvider>
      </body>
    </html>
  );
}
