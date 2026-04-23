import { Container } from "./Container";

interface BannerProps {
  children: React.ReactNode;
  backgroundImage?: string;
  backgroundColor?: string;
  overlay?: boolean;
  overlayColor?: string;
  className?: string;
  useContainer?: boolean;
  backgroundPosition?: string;
  style?: React.CSSProperties;
}

export const Banner = ({
  children,
  backgroundImage,
  backgroundColor = "bg-gray-100",
  overlay = true,
  overlayColor = "bg-black/50",
  className = "",
  useContainer = true,
  backgroundPosition,
  style,
}: BannerProps) => {
  return (
    <section
      className={`w-full relative ${backgroundColor} ${className}`}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: backgroundPosition ?? "center",
              ...style,
            }
          : {}
      }
    >
      {overlay && <div className={`absolute inset-0 ${overlayColor}`} />}

      {useContainer ? (
        <Container className="relative z-10">{children}</Container>
      ) : (
        <div className="relative z-10 w-full">{children}</div>
      )}
    </section>
  );
};
