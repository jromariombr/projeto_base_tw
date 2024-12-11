import { ReactNode, useState, createContext } from "react";

interface IMainContext {
  language: number;
}

interface IMainContextProvider {
  children: ReactNode;
}

export const MainContext = createContext({} as IMainContext);

export function MainContextProvider({ children }: IMainContextProvider) {

  const [language, setLanguage] = useState<number>(0); // 0 portugues, 1 inglês 2 expanhol

  return (
    <MainContext.Provider value={{ language }}>
      {children}
    </MainContext.Provider>
  )
}