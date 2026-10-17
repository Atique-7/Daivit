type BrandLogoProps = {
  animated?: boolean;
  className?: string;
  theme?: "dark" | "light";
};

const logoSource = "/images/daivit/logo.png";

function LogoSlice({ className, viewBox }: { className: string; viewBox: string }) {
  return (
    <svg className={className} viewBox={viewBox} aria-hidden="true" focusable="false">
      <image href={logoSource} x="0" y="0" width="4096" height="2048" />
    </svg>
  );
}

export function BrandSymbol({ className = "" }: { className?: string }) {
  return (
    <LogoSlice
      className={`brand-symbol ${className}`.trim()}
      viewBox="540 270 1250 1510"
    />
  );
}

export function BrandLogo({ animated = false, className = "", theme = "dark" }: BrandLogoProps) {
  const classes = [
    "brand-lockup",
    `brand-lockup--${theme}`,
    animated ? "brand-lockup--animated" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes} role="img" aria-label="Daivit Maternity and Orthopaedic Hospital">
      <BrandSymbol />
      <span className="brand-wordmark" aria-hidden="true">
        <LogoSlice className="brand-name" viewBox="1770 630 1840 560" />
        <LogoSlice className="brand-specialty" viewBox="1780 1160 1810 210" />
        <LogoSlice className="brand-hospital" viewBox="1775 1325 1840 300" />
      </span>
    </span>
  );
}
