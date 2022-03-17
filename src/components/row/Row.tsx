import React, {HTMLAttributes} from 'react';
import styles from './Row.module.scss';
import {JustifyContent, JustifyItems, AlignItems, AlignContent, JustifySelf, AlignSelf} from "../flexTypes";
//Utilities
import {classNames as $c} from "../../utils/functions";

interface RowProps extends HTMLAttributes<HTMLElement> {
	"tag"?: React.ElementType,
	"children"?: React.ReactNode,
	"className"?: string,
	"justify"?: JustifyContent
	"justify-sm"?: JustifyContent,
	"justify-md"?: JustifyContent,
	"justify-lg"?: JustifyContent,
	"justify-xl"?: JustifyContent,
	"justify-items"?: JustifyItems,
	"justify-items-sm"?: JustifyItems,
	"justify-items-md"?: JustifyItems,
	"justify-items-lg"?: JustifyItems,
	"justify-items-xl"?: JustifyItems,
	"justify-self"?: JustifySelf,
	"justify-self-sm"?: JustifySelf,
	"justify-self-md"?: JustifySelf,
	"justify-self-lg"?: JustifySelf,
	"justify-self-xl"?: JustifySelf,
	"align"?: AlignItems,
	"align-sm"?: AlignItems,
	"align-md"?: AlignItems,
	"align-lg"?: AlignItems,
	"align-xl"?: AlignItems,
	"align-content"?: AlignContent,
	"align-content-sm"?: AlignContent,
	"align-content-md"?: AlignContent,
	"align-content-lg"?: AlignContent,
	"align-content-xl"?: AlignContent,
	"align-self"?: AlignSelf,
	"align-self-sm"?: AlignSelf,
	"align-self-md"?: AlignSelf,
	"align-self-lg"?: AlignSelf,
	"align-self-xl"?: AlignSelf,
}

const Row = React.forwardRef<HTMLElement, RowProps>(({
	'tag': Tag = 'div',
	'children': children,
	'className': className = '',
	'justify': justify,
	'justify-sm': justifySM,
	'justify-md': justifyMD,
	'justify-lg': justifyLG,
	'justify-xl': justifyXL,
	'justify-items': justifyItems,
	'justify-items-sm': justifyItemsSM,
	'justify-items-md': justifyItemsMD,
	'justify-items-lg': justifyItemsLG,
	'justify-items-xl': justifyItemsXL,
	'justify-self': justifySelf,
	'justify-self-sm': justifySelfSM,
	'justify-self-md': justifySelfMD,
	'justify-self-lg': justifySelfLG,
	'justify-self-xl': justifySelfXL,
	'align': align,
	'align-sm': alignSM,
	'align-md': alignMD,
	'align-lg': alignLG,
	'align-xl': alignXL,
	'align-content': alignContent,
	'align-content-sm': alignContentSM,
	'align-content-md': alignContentMD,
	'align-content-lg': alignContentLG,
	'align-content-xl': alignContentXL,
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
				'd-flex flex-wrap',
				className,
				justify ? 'justify-'+justify : '',
				justifySM ? 'justify-sm-'+justifySM : '',
				justifyMD ? 'justify-md-'+justifyMD : '',
				justifyLG ? 'justify-lg-'+justifyLG : '',
				justifyXL ? 'justify-xl-'+justifyXL : '',
				justifyItems ? 'justify-items-'+justifyItems : '',
				justifyItemsSM ? 'justify-items-sm-'+justifyItemsSM : '',
				justifyItemsMD ? 'justify-items-md-'+justifyItemsMD : '',
				justifyItemsLG ? 'justify-items-lg-'+justifyItemsLG : '',
				justifyItemsXL ? 'justify-items-xl-'+justifyItemsXL : '',
				justifySelf ? 'justify-self-'+justifySelf : '',
				justifySelfSM ? 'justify-self-sm-'+justifySelfSM : '',
				justifySelfMD ? 'justify-self-md-'+justifySelfMD : '',
				justifySelfLG ? 'justify-self-lg-'+justifySelfLG : '',
				justifySelfXL ? 'justify-self-xl-'+justifySelfXL : '',
				align ? 'align-'+align : '',
				alignSM ? 'align-sm-'+alignSM : '',
				alignMD ? 'align-md-'+alignMD : '',
				alignLG ? 'align-lg-'+alignLG : '',
				alignXL ? 'align-xl-'+alignXL : '',
				alignContent ? 'align-'+alignContent : '',
				alignContentSM ? 'align-content-sm-'+alignContentSM : '',
				alignContentMD ? 'align-content-md-'+alignContentMD : '',
				alignContentLG ? 'align-content-lg-'+alignContentLG : '',
				alignContentXL ? 'align-content-xl-'+alignContentXL : '',
				alignSelf ? 'align-self-'+justifySelf : '',
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

export type RowType = typeof Row;
export default React.memo(Row, (prevProps, nextProps) => {
	let prop: keyof typeof nextProps;
	for(prop in nextProps){
		if(prevProps[prop] !== nextProps[prop]) return false;
	}
	return true;
});