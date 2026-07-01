import styles from "./Logo.module.css";

interface LogoProps {
  readonly compact?: boolean;
}

const Logo = ({ compact = false }: LogoProps): JSX.Element => {
  const src = compact ? "/logo-mark.svg" : "/logo.svg";
  const width = compact ? 40 : 190;
  const height = compact ? 40 : 44;

  return (
    <img
      src={src}
      alt="CashPilot"
      width={width}
      height={height}
      className={styles.logo}
    />
  );
};

export default Logo;
