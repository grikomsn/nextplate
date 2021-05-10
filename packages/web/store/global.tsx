// https://github.com/pmndrs/zustand/#react-context

import * as React from "react";

import create from "zustand";
import createContext from "zustand/context";

interface GlobalStoreProps {
  count: number;
  increment: () => void;
}

export const GlobalContext = createContext<GlobalStoreProps>();

const initialStore = create<GlobalStoreProps>((set, get) => ({
  count: 1,
  increment: () => set({ count: get().count + 1 }),
}));

export const GlobalProvider: React.FC = (props) => {
  const { children } = props;

  return (
    <GlobalContext.Provider initialStore={initialStore}>
      {/*  */}
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalStore = GlobalContext.useStore;
