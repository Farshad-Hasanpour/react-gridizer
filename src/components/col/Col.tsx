import React from 'react';
import './Col.scss';
import { AlignSelf } from "../flexTypes";
//Utilities
import {classNames as $c} from "../../utils/functions";

type Size = number | 'unset' | 'auto' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
type Offset = number | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11';
type Order = number | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

interface ColProps extends React.HTMLAttributes<HTMLElement> {
	"tag"?: React.ElementType,
	"children"?: React.ReactNode,
	"className"?: string,
	"class"?: string,
	"cols"?: Size,
	"sm"?: Size,
	"md"?: Size,
	"lg"?: Size,
	"xl"?: Size,
	"order"?: Order,
	"order-sm"?: Order,
	"order-md"?: Order,
	"order-lg"?: Order,
	"order-xl"?: Order,
	"offset"?: Offset,
	"offset-sm"?: Offset,
	"offset-md"?: Offset,
	"offset-lg"?: Offset,
	"offset-xl"?: Offset,
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
	'class': otherClasses = '',
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
	const prefix = process.env.CSS_PREFIX || '';
	return (
		<Tag
			{...otherProps}
			ref={ref}
			className={$c(
				className,
				otherClasses,
				cols ? prefix+'col-'+cols : '',
				sm ? prefix+'col-sm-'+sm : '',
				md ? prefix+'col-md-'+md : '',
				lg ? prefix+'col-lg-'+lg : '',
				xl ? prefix+'col-xl-'+xl : '',
				order ? prefix+'order-'+order : '',
				orderSM ? prefix+'order-sm-'+orderSM : '',
				orderMD ? prefix+'order-md-'+orderMD : '',
				orderLG ? prefix+'order-lg-'+orderLG : '',
				orderXL ? prefix+'order-xl-'+orderXL : '',
				offset ? prefix+'offset-'+offset : '',
				offsetSM ? prefix+'offset-sm-'+offsetSM : '',
				offsetMD ? prefix+'offset-md-'+offsetMD : '',
				offsetLG ? prefix+'offset-lg-'+offsetLG : '',
				offsetXL ? prefix+'offset-xl-'+offsetXL : '',
				alignSelf ? prefix+'align-self-'+alignSelf : '',
				alignSelfSM ? prefix+'align-self-sm-'+alignSelfSM : '',
				alignSelfMD ? prefix+'align-self-md-'+alignSelfMD : '',
				alignSelfLG ? prefix+'align-self-lg-'+alignSelfLG : '',
				alignSelfXL ? prefix+'align-self-xl-'+alignSelfXL : '',
			)}
		>
			{children}
		</Tag>
	);
});

export type ColType = typeof Col;
export default Col;