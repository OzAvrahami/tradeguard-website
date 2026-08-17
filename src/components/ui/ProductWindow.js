import Image from "next/image";

export default function ProductWindow({ showcase = false }) {
  return (
    <div className={`productWindow ${showcase ? "productWindowLarge" : "productWindowHero"}`}>
      <div className="windowBar">
        <Image src="/brand/limitpact-app-icon.png" alt="" width={18} height={18} />
        <span>LimitPact</span>
        <span className="windowSpacer" />
        <span>—</span><span>□</span><span>×</span>
      </div>
      <div className="windowBody">
        <div className="appBrand">
          <Image src="/brand/limitpact-mark.png" alt="" width={36} height={36} />
          <div><strong>LimitPact</strong><small>Discipline &amp; Risk Control</small></div>
        </div>
        <div className="statusHero">
          <div className="shieldHalo">
            <Image src="/brand/limitpact-mark.png" alt="LimitPact mark" width={showcase ? 54 : 50} height={showcase ? 54 : 50} />
          </div>
          <small>TRADING STATUS</small>
          <strong><i className="dot dotCyan" />Open</strong>
        </div>
        <div className="pnlCard">
          <span><b>Daily P&amp;L</b><small>PNL · TODAY</small></span>
          <strong>{showcase ? "+$520.00" : "+$320.00"}</strong>
        </div>
        {showcase && (
          <div className="profitFloor"><span>◇ &nbsp; Profit Protection</span><b>Floor +$500</b></div>
        )}
        <div className="appStatusGrid">
          <div><span>Account</span><b><i className="dot dotGreen" />Connected</b></div>
          <div><span>Monitor</span><b><i className="dot dotCyan" />Active</b></div>
        </div>
        {!showcase && (
          <div className="appActions">
            <div className="monitorActive">■ &nbsp; Monitoring Active</div>
            <div className="lockNow">▣ &nbsp; Lock Now</div>
          </div>
        )}
        <div className="appFooter"><span>v2.4.1</span><span><i className="dot dotGreen" />Local service running</span></div>
      </div>
    </div>
  );
}
