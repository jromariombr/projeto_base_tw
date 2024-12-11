import { useContext } from "react";
import { MainContext } from "@/contexts";

export const useMain = () => {
  return useContext(MainContext);
}