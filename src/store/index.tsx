import { atom } from "recoil";
import { IChain } from "../types/chain";

export const chainState = atom({
  key: "chain", // unique ID (with respect to other atoms/selectors)
  default: {} as IChain, // default value (aka initial value)
});
