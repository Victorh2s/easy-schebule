import { ReactNode, createContext, useContext, useState } from 'react';

interface SideBarContextProps {
  children: ReactNode;
}

interface SideBarContextData {
  setSideBarState(): void;
  setSideBarStateFalse(): void;
  isOpen: boolean;
}

const SideBarContext = createContext<SideBarContextData>(
  {} as SideBarContextData
);

export function SideBarProvider({ children }: SideBarContextProps) {
  const [isOpen, setIsOpen] = useState(false);

  function setSideBarState() {
    setIsOpen(!isOpen);
  }

  function setSideBarStateFalse() {
    setIsOpen(false);
  }

  return (
    <SideBarContext.Provider
      value={{ setSideBarState, setSideBarStateFalse, isOpen }}
    >
      {children}
    </SideBarContext.Provider>
  );
}

export function useSideBarContext(): SideBarContextData {
  const context = useContext(SideBarContext);
  return context;
}
