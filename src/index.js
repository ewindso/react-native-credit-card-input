import connectToState from "./connectToState";
import CCF from "./CreditCardInput";
import VCCF from './VerticalCardInput'
import LiteCCF from "./LiteCreditCardInput";
import CV from "./CardView";

export const CreditCardInput = connectToState(CCF);
export const VerticalCardInput = connectToState(VCCF)
export const LiteCreditCardInput = connectToState(LiteCCF);
export const CardView = CV;
