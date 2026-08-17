import Image from "next/image";

export default function Brand({ compact = false }) {
  return (
    <span className="brand">
      <Image
        src="/brand/limitpact-logo.png"
        alt="LimitPact"
        width={compact ? 81 : 87}
        height={compact ? 27 : 29}
        className="brandLogo"
      />
    </span>
  );
}
