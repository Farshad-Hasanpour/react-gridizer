import React from 'react';
import styles from './Row.module.scss';
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
				styles['row'],
				className,
				gutters !== 'none' ? styles['gutters-'+gutters] : '',
				reverse ? 'flex-row-reverse' : '',
				justify ? 'justify-'+justify : '',
				justifySM ? 'justify-sm-'+justifySM : '',
				justifyMD ? 'justify-md-'+justifyMD : '',
				justifyLG ? 'justify-lg-'+justifyLG : '',
				justifyXL ? 'justify-xl-'+justifyXL : '',
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
			)}
		>
			{children}
		</Tag>
	);
});

export type RowType = typeof Row;
export default Row;