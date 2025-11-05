import React from "react";

export default function SkillTag({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-1 bg-neutral-800 w-fit p-2 rounded-xl text-sm">
      {children}
    </div>
  );
}
