import React, { useEffect, useState } from "react";

export default function useResponsive() {
	const [screenSize, setScreenSize] = useState({
		isMobile: false,
		isTablet: false,
		isDesktop: true,
	});

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			setScreenSize({
				isMobile: width < 768,
				isTablet: width >= 768 && width < 992,
				isDesktop: width >= 992,
			});
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return screenSize;
}
