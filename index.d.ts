import { RowType } from './src/components/row/Row';
import { ColType } from './src/components/col/Col';
import { SpacerType } from './src/components/spacer/Spacer';
import { useBreakpointsType } from "./src/hooks/useBreakpoints";

declare module "@farshad-hasanpour/react-bidimensional-grid-system"{
	export const Row: RowType;
	export const Col: ColType;
	export const Spacer: SpacerType;
	export const useBreakpoints: useBreakpointsType;
}