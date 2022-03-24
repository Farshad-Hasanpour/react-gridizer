import React from 'react';

function set(width: number){
	return {
		width: width,
		xsOnly: width < 600,
		smOnly: width >= 600 && width < 960,
		smAndDown: width < 960,
		mdOnly: width >=960 && width < 1280 - 16,
		mdAndDown: width < 1280 - 16,
		lgOnly: width >= 1280 - 16 && width < 1920 - 16,
		lgAndDown: width < 1920 - 16,
		xlOnly: width >= 1920 - 16,
	}
}

const useBreakpoints = () => {
	const [size, setSize] = React.useState(
		set(window.innerWidth)
	);

	React.useEffect(() => {
		function resize() {
			setSize(
				set(window.innerWidth)
			);
		}

		window.addEventListener("resize", resize);

		return () => {
			window.removeEventListener("resize", resize);
		}
	}, []);

	return size;
};

export type useBreakpointsType = typeof useBreakpoints;
export default useBreakpoints;