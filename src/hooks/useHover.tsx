import React, { useState, useRef, useEffect } from 'react';
import useWindowSize from './useWindowSize';

type UseHoverType<T extends HTMLElement> = [boolean, React.RefObject<T>];

function useHover<T extends HTMLElement>(): UseHoverType<T> {
	const [isHovered, setIsHovered] = useState<boolean>(false); // hover state
	const myRef = useRef<T>(null); // innitial ref
	const size = useWindowSize();
	const breakpoint = 1200;

	// Set state on element enter
	const enterHandler = () => {
		setIsHovered(true);
	};
	// Set state on element leave
	const leaveHandler = () => {
		setIsHovered(false);
	};

	// On first load attach eventlisteners to ref & remove eventlisteners when component unmount
	useEffect(() => {
		const localRef = myRef.current;
		if (size.width > breakpoint) {
			if (localRef) {
				localRef.addEventListener('mouseenter', enterHandler);
				localRef.addEventListener('mouseleave', leaveHandler);
				return () => {
					localRef.removeEventListener('mouseenter', enterHandler);
					localRef.removeEventListener('mouseleave', enterHandler);
				};
			}
		}
	}, [size.width]);

	return [isHovered, myRef];
}

export default useHover;
