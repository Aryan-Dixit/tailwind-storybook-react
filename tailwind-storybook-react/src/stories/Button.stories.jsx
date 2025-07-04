import { useState } from 'react';
import { Button as ButtonScss } from '../components/ButtonSCSS/Button';
import { Button as ButtonTailwind } from '../components/ButtonTailwind/Button';

export default {
	title: 'Components/Button',
	component: ButtonScss,
};

export const SCSS = () => {
	const [count, setCount] = useState(0);
	return (
		<ButtonScss
			label={`This is SCSS Button->${count}`}
			onClick={() => {
				setCount((prev) => {
					return prev + 1;
				});
			}}
		/>
	);
};

export const Tailwind = () => {
	const [count, setCount] = useState(100);
	return (
		<ButtonTailwind
			label={`This is Tailwind Button->${count}`}
			onClick={() => {
				setCount((prev) => {
					return prev - 1;
				});
			}}
		/>
	);
};
