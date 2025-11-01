export default function ContentWrapper({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`border-2 border-neutral-700 rounded-2xl p-3 ${className}`}
    >
      {children}
    </section>
  );
}
