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
				className,
				styles['row'],
				gutters !== 'none' ? styles['gutters--'+gutters] : '',
				reverse ? styles['row--reverse'] : '',
				justify ? styles['justify-'+justify] : '',
				justifySM ? styles['justify-sm-'+justifySM] : '',
				justifyMD ? styles['justify-md-'+justifyMD] : '',
				justifyLG ? styles['justify-lg-'+justifyLG] : '',
				justifyXL ? styles['justify-xl-'+justifyXL] : '',
				align ? styles['align-'+align] : '',
				alignSM ? styles['align-sm-'+alignSM] : '',
				alignMD ? styles['align-md-'+alignMD] : '',
				alignLG ? styles['align-lg-'+alignLG] : '',
				alignXL ? styles['align-xl-'+alignXL] : '',
				alignContent ? styles['align-'+alignContent] : '',
				alignContentSM ? styles['align-content-sm-'+alignContentSM] : '',
				alignContentMD ? styles['align-content-md-'+alignContentMD] : '',
				alignContentLG ? styles['align-content-lg-'+alignContentLG] : '',
				alignContentXL ? styles['align-content-xl-'+alignContentXL] : '',
			)}
		>
			{children}
		</Tag>
	);
});

export type RowType = typeof Row;
export default Row;