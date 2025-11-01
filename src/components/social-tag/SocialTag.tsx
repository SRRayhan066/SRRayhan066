import React from "react";

export default function SocialTag({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center p-2 rounded-lg gap-1 text-xl w-full cursor-pointer">
      {children}
    </div>
  );
}
