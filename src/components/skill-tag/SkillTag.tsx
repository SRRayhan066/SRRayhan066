import React from "react";

export default function SkillTag({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-1 gradient-card w-fit p-2 rounded-xl text-sm">
      {children}
    </div>
  );
}
