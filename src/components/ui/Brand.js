import Image from "next/image";

export default function Brand({ compact = false }) {
  return (
    <span className="brand">
      <Image
        src="/brand/tradeguard-mark.png"
        alt=""
        width={compact ? 28 : 30}
        height={compact ? 28 : 30}
        className="brandMark"
      />
      <span className={compact ? "brandName brandNameSmall" : "brandName"}>TradeGuard</span>
    </span>
  );
}
