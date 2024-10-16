import { createContext, useContext } from "react";

export const AppContext = createContext({});

export const useAppContext = () => {
  return useContext(AppContext)
}

// We export provider from here to avoid wrapping main.jsx with provider and passing TodoContext as prop
export const AppContextProvider = AppContext.Provider;