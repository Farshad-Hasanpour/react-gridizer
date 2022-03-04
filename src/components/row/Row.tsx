import React from 'react';
import styles from './Row.module.scss';
import Column from "../column/Column";

interface RowProps {

}

const Row: React.FC<RowProps> = ({
}): React.ReactElement => {
	return (
		<div>Row Works</div>
	);
};

export type RowType = typeof Row;
export default Row;