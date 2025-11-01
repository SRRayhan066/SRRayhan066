import React from "react";

export default function InfoTag({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-2 border rounded-4xl w-fit text-sm border-neutral-600 flex items-center justify-center">
      {children}
    </div>
  );
}
