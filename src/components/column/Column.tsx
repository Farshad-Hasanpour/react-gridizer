import React from 'react';
import styles from './Column.module.scss';

interface ColumnProps {

}

const Column: React.FC<ColumnProps> = ({

}): React.ReactElement => {
	return (
		<div className={[styles['test-column'], 'test'].join(' ')}>
			Column Works
		</div>
	);
};

export type ColumnType = typeof Column;
export default Column;