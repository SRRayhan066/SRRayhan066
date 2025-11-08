import React from "react";

export default function ProgrammingTag({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center gradient-card rounded-lg p-4 w-full gap-2">
      {children}
    </div>
  );
}
