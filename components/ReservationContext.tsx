"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import ReservationModal from "./ReservationModal";

type CtxType = { openModal: () => void };
const ReservationContext = createContext<CtxType>({ openModal: () => {} });

export function ReservationProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <ReservationContext.Provider value={{ openModal: () => setOpen(true) }}>
      {children}
      <ReservationModal isOpen={open} onClose={() => setOpen(false)} />
    </ReservationContext.Provider>
  );
}

export const useReservation = () => useContext(ReservationContext);
