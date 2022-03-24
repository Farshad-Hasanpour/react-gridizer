import React from 'react';
import './Col.scss';
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
				cols ? 'rr-col-'+cols : '',
				sm ? 'rr-col-sm-'+sm : '',
				md ? 'rr-col-md-'+md : '',
				lg ? 'rr-col-lg-'+lg : '',
				xl ? 'rr-col-xl-'+xl : '',
				order ? 'rr-order-'+order : '',
				orderSM ? 'rr-order-sm-'+orderSM : '',
				orderMD ? 'rr-order-md-'+orderMD : '',
				orderLG ? 'rr-order-lg-'+orderLG : '',
				orderXL ? 'rr-order-xl-'+orderXL : '',
				offset ? 'rr-offset-'+offset : '',
				offsetSM ? 'rr-offset-sm-'+offsetSM : '',
				offsetMD ? 'rr-offset-md-'+offsetMD : '',
				offsetLG ? 'rr-offset-lg-'+offsetLG : '',
				offsetXL ? 'rr-offset-xl-'+offsetXL : '',
				alignSelf ? 'rr-align-self-'+alignSelf : '',
				alignSelfSM ? 'rr-align-self-sm-'+alignSelfSM : '',
				alignSelfMD ? 'rr-align-self-md-'+alignSelfMD : '',
				alignSelfLG ? 'rr-align-self-lg-'+alignSelfLG : '',
				alignSelfXL ? 'rr-align-self-xl-'+alignSelfXL : '',
			)}
		>
			{children}
		</Tag>
	);
});

export type ColType = typeof Col;
export default Col;