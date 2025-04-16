"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ClanResultType = {
  clanResult: string;
  setClanResult: (lang: string) => void;
};

const ClanResult = createContext<ClanResultType | undefined>(undefined);

export function ClanResultProvider({ children }: { children: ReactNode }) {
  const [clanResult, setClanResult] = useState("");

  return (
    <ClanResult.Provider value={{ clanResult, setClanResult }}>
      {children}
    </ClanResult.Provider>
  );
}

export function useClanResult() {
  const context = useContext(ClanResult);
  if (!context) throw new Error("useClanResult must be used within ClanResultProvider");
  return context;
}
