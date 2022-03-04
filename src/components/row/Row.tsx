import React from 'react';
import styles from './Row.module.scss';

interface RowProps {

}

const Row: React.FC<RowProps> = ({
}): React.ReactElement => {
	return (
		<div className={[styles['test-row'], 'test'].join(' ')}>
			Row Works
		</div>
	);
};

export type RowType = typeof Row;
export default Row;