interface HeadingProps {
  text: string;
}

export default function Heading({ text }: HeadingProps) {
  const style: React.CSSProperties = {
    fontSize: "30px",
    fontWeight: "700",
    color: "#232323",
    fontFamily: "var(--var-jarkatafonts)",
    textAlign: "center",
    textTransform: "capitalize",
  };
  return <h1 style={style}>{text}</h1>;
}
