import React from 'react';
import styles from './Col.module.scss';

interface ColProps {

}

const Col: React.FC<ColProps> = ({

}): React.ReactElement => {
	return (
		<div className={[styles['test-column'], 'test'].join(' ')}>
			Col Works
		</div>
	);
};

export type ColType = typeof Col;
export default Col;