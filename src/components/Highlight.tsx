export default function Highlight({
  children,
  color = "#D9EAFD",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: "4px",
        padding: "0.3rem",
      }}
    >
      {children}
    </span>
  );
}
