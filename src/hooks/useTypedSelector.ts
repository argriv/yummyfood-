import { RootState } from "../store";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector