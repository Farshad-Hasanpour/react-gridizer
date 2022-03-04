import {RowType} from './src/components/row/Row';
import {ColumnType} from './src/components/column/Column';

declare module "react-bidimensional-grid-system"{
	export const Row: RowType;
	export const Column: ColumnType;
}