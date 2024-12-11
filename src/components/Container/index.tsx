import { ReactNode } from "react";
import * as S from "./styles";

interface IContainer {
  children: ReactNode;
}

export const Container = ({ children }: IContainer) => {
  return (
    <S.Container>
      {children}
    </S.Container>
  )
}