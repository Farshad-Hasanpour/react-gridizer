import React from 'react';
import styles from './Col.module.scss';
import { AlignSelf } from "../flexTypes";
//Utilities
import {classNames as $c} from "../../utils/functions";

type Size = number | 'unset' | 'auto' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

interface ColProps extends React.HTMLAttributes<HTMLElement> {
	"tag"?: React.ElementType,
	"children"?: React.ReactNode,
	"className"?: string,
	"cols"?: Size,
	"sm"?: Size,
	"md"?: Size,
	"lg"?: Size,
	"xl"?: Size,
	"order"?: number,
	"order-sm"?: number,
	"order-md"?: number,
	"order-lg"?: number,
	"order-xl"?: number,
	"offset"?: number,
	"offset-sm"?: number,
	"offset-md"?: number,
	"offset-lg"?: number,
	"offset-xl"?: number,
	"align-self"?: AlignSelf,
	"align-self-sm"?: AlignSelf,
	"align-self-md"?: AlignSelf,
	"align-self-lg"?: AlignSelf,
	"align-self-xl"?: AlignSelf,
}

const Col = React.forwardRef<HTMLElement, ColProps>(({
	'tag': Tag = 'div',
	'children': children,
	'className': className = '',
	cols = 'auto',
	sm,
	md,
	lg,
	xl,
	'order': order,
	'order-sm': orderSM,
	'order-md': orderMD,
	'order-lg': orderLG,
	'order-xl': orderXL,
	'offset': offset,
	'offset-sm': offsetSM,
	'offset-md': offsetMD,
	'offset-lg': offsetLG,
	'offset-xl': offsetXL,
	'align-self': alignSelf,
	'align-self-sm': alignSelfSM,
	'align-self-md': alignSelfMD,
	'align-self-lg': alignSelfLG,
	'align-self-xl': alignSelfXL,
	...otherProps
}, ref) => {
	return (
		<Tag
			{...otherProps}
			ref={ref}
			className={$c(
				className,
				cols ? 'col-'+cols : '',
				sm ? 'col-sm-'+sm : '',
				md ? 'col-md-'+md : '',
				lg ? 'col-lg-'+lg : '',
				xl ? 'col-xl-'+xl : '',
				order ? 'col-order-'+order : '',
				orderSM ? 'col-order-sm-'+orderSM : '',
				orderMD ? 'col-order-md-'+orderMD : '',
				orderLG ? 'col-order-lg-'+orderLG : '',
				orderXL ? 'col-order-xl-'+orderXL : '',
				offset ? 'col-offset-'+offset : '',
				offsetSM ? 'col-offset-sm-'+offsetSM : '',
				offsetMD ? 'col-offset-md-'+offsetMD : '',
				offsetLG ? 'col-offset-lg-'+offsetLG : '',
				offsetXL ? 'col-offset-xl-'+offsetXL : '',
				alignSelf ? 'align-self-'+alignSelf : '',
				alignSelfSM ? 'align-self-sm-'+alignSelfSM : '',
				alignSelfMD ? 'align-self-md-'+alignSelfMD : '',
				alignSelfLG ? 'align-self-lg-'+alignSelfLG : '',
				alignSelfXL ? 'align-self-xl-'+alignSelfXL : '',
			)}
		>
			{children}
		</Tag>
	);
});

export type ColType = typeof Col;
export default Col;