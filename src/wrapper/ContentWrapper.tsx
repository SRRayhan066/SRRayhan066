export default function ContentWrapper({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`border-2 border-neutral-700 rounded-2xl p-3 bg-neutral-900/40 backdrop-blur-sm h-full overflow-y-auto ${className}`}
    >
      {children}
    </section>
  );
}
