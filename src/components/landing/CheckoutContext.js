import React, { createContext, useCallback, useContext, useState } from 'react';

const CheckoutContext = createContext(null);

/** Wraps the landing page so any "Get Started" button can open one shared
 *  checkout modal, optionally seeded with the plan that was clicked. */
export function CheckoutProvider({ children }) {
  const [isOpen, setOpen] = useState(false);
  const [plan, setPlan] = useState(null);

  const open = useCallback((selectedPlan = null) => {
    setPlan(selectedPlan);
    setOpen(true);
  }, []);
  const close = useCallback(() => setOpen(false), []);

  return (
    <CheckoutContext.Provider value={{ isOpen, plan, open, close }}>
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  return (
    useContext(CheckoutContext) || {
      isOpen: false,
      plan: null,
      open: () => {},
      close: () => {},
    }
  );
}
