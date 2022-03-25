import React from 'react';
import './Spacer.scss';
//Utilities
import {classNames as $c} from "../../utils/functions";

interface SpacerProps extends React.HTMLAttributes<HTMLElement> {
	"tag"?: React.ElementType,
	"children"?: React.ReactNode,
	"className"?: string,
}

const Spacer = React.forwardRef<HTMLElement, SpacerProps>(({
	'tag': Tag = 'div',
	children,
	className = '',
	...otherProps
}, ref) => {
	const prefix = process.env.CSS_PREFIX || '';
	return (
		<Tag
			{...otherProps}
			ref={ref}
			className={$c(
				prefix+'spacer',
				className,
			)}
		>
			{children}
		</Tag>
	);
});

export type SpacerType = typeof Spacer;
export default Spacer;
