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
				cols ? styles['col-'+cols] : '',
				sm ? styles['col-sm-'+sm] : '',
				md ? styles['col-md-'+md] : '',
				lg ? styles['col-lg-'+lg] : '',
				xl ? styles['col-xl-'+xl] : '',
				order ? styles['col-order-'+order] : '',
				orderSM ? styles['col-order-sm-'+orderSM] : '',
				orderMD ? styles['col-order-md-'+orderMD] : '',
				orderLG ? styles['col-order-lg-'+orderLG] : '',
				orderXL ? styles['col-order-xl-'+orderXL] : '',
				offset ? styles['col-offset-'+offset] : '',
				offsetSM ? styles['col-offset-sm-'+offsetSM] : '',
				offsetMD ? styles['col-offset-md-'+offsetMD] : '',
				offsetLG ? styles['col-offset-lg-'+offsetLG] : '',
				offsetXL ? styles['col-offset-xl-'+offsetXL] : '',
				alignSelf ? styles['align-self-'+alignSelf] : '',
				alignSelfSM ? styles['align-self-sm-'+alignSelfSM] : '',
				alignSelfMD ? styles['align-self-md-'+alignSelfMD] : '',
				alignSelfLG ? styles['align-self-lg-'+alignSelfLG] : '',
				alignSelfXL ? styles['align-self-xl-'+alignSelfXL] : '',
			)}
		>
			{children}
		</Tag>
	);
});

export type ColType = typeof Col;
export default Col;