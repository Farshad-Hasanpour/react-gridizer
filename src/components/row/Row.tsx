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
	return (
		<Tag
			{...otherProps}
			ref={ref}
			className={$c(
				className,
				'rr-row',
				gutters !== 'none' ? 'rr-gutters--'+gutters : '',
				reverse ? 'rr-row--reverse' : '',
				justify ? 'rr-justify-'+justify : '',
				justifySM ? 'rr-justify-sm-'+justifySM : '',
				justifyMD ? 'rr-justify-md-'+justifyMD : '',
				justifyLG ? 'rr-justify-lg-'+justifyLG : '',
				justifyXL ? 'rr-justify-xl-'+justifyXL : '',
				align ? 'rr-align-'+align : '',
				alignSM ? 'rr-align-sm-'+alignSM : '',
				alignMD ? 'rr-align-md-'+alignMD : '',
				alignLG ? 'rr-align-lg-'+alignLG : '',
				alignXL ? 'rr-align-xl-'+alignXL : '',
				alignContent ? 'rr-align-'+alignContent : '',
				alignContentSM ? 'rr-align-content-sm-'+alignContentSM : '',
				alignContentMD ? 'rr-align-content-md-'+alignContentMD : '',
				alignContentLG ? 'rr-align-content-lg-'+alignContentLG : '',
				alignContentXL ? 'rr-align-content-xl-'+alignContentXL : '',
			)}
		>
			{children}
		</Tag>
	);
});

export type RowType = typeof Row;
export default Row;