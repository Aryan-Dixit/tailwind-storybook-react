import { useState } from 'react';
import { Toggle as ToggleSCSS } from '../components/ToggleSCSS/Toggle';
import { Toggle as ToggleTailwind } from '../components/ToggleTailwind/Toggle';

export default {
	title: 'Components/Toggle',
	component: ToggleSCSS,
};

export const SCSS = () => {
	const [active, setActive] = useState(1);
	const options = [
		{
			id: 1,
			title: 'First',
		},
		{
			id: 2,
			title: 'Second',
		},
		{
			id: 3,
			title: 'Third',
		},
		{
			id: 4,
			title: 'Fourth',
		},
	];
	return (
		<ToggleSCSS
			options={options}
			active={active}
			onClick={(id) => {
				setActive(id);
			}}
		/>
	);
};

export const Tailwind = () => {
	const [active, setActive] = useState(4);
	const options = [
		{
			id: 1,
			title: 'First',
		},
		{
			id: 2,
			title: 'Second',
		},
		{
			id: 3,
			title: 'Third',
		},
		{
			id: 4,
			title: 'Fourth',
		},
	];
	return (
		<ToggleTailwind
			options={options}
			active={active}
			onClick={(id) => {
				setActive(id);
			}}
		/>
	);
};
