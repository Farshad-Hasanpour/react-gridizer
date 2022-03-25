import React from 'react';
import './Row.scss';
import {JustifyContent, AlignItems, AlignContent } from "../flexTypes";
//Utilities
import {classNames as $c} from "../../utils/functions";

interface RowProps extends React.HTMLAttributes<HTMLElement> {
	"tag"?: React.ElementType,
	"children"?: React.ReactNode,
	"className"?: string,
	"reverse"?: boolean,
	"gutters"?: 'normal' | 'dense' | 'none',
	"justify"?: JustifyContent,
	"justify-sm"?: JustifyContent,
	"justify-md"?: JustifyContent,
	"justify-lg"?: JustifyContent,
	"justify-xl"?: JustifyContent,
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
}

const Row = React.forwardRef<HTMLElement, RowProps>(({
	'tag': Tag = 'div',
	children,
	className = '',
	reverse = false,
	'gutters': gutters = 'normal',
	'justify': justify,
	'justify-sm': justifySM,
	'justify-md': justifyMD,
	'justify-lg': justifyLG,
	'justify-xl': justifyXL,
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
	...otherProps
}, ref) => {
	const prefix = process.env.CSS_PREFIX || '';
	return (
		<Tag
			{...otherProps}
			ref={ref}
			className={$c(
				className,
				'rr-row',
				gutters !== 'none' ? prefix+'gutters--'+gutters : '',
				reverse ? prefix+'row--reverse' : '',
				justify ? prefix+'justify-'+justify : '',
				justifySM ? prefix+'justify-sm-'+justifySM : '',
				justifyMD ? prefix+'justify-md-'+justifyMD : '',
				justifyLG ? prefix+'justify-lg-'+justifyLG : '',
				justifyXL ? prefix+'justify-xl-'+justifyXL : '',
				align ? prefix+'align-'+align : '',
				alignSM ? prefix+'align-sm-'+alignSM : '',
				alignMD ? prefix+'align-md-'+alignMD : '',
				alignLG ? prefix+'align-lg-'+alignLG : '',
				alignXL ? prefix+'align-xl-'+alignXL : '',
				alignContent ? prefix+'align-'+alignContent : '',
				alignContentSM ? prefix+'align-content-sm-'+alignContentSM : '',
				alignContentMD ? prefix+'align-content-md-'+alignContentMD : '',
				alignContentLG ? prefix+'align-content-lg-'+alignContentLG : '',
				alignContentXL ? prefix+'align-content-xl-'+alignContentXL : '',
			)}
		>
			{children}
		</Tag>
	);
});

export type RowType = typeof Row;
export default Row;