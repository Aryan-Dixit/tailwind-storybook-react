import { useState } from 'react';
import { Stepper as StepperSCSS } from '../components/StepperSCSS/Stepper';
import { Stepper as StepperTailwind } from '../components/StepperTailwind/Stepper';

export default {
	title: 'Components/Stepper',
	component: StepperSCSS,
};

export const SCSS = () => {
	const [active, setActive] = useState(0);
	const options = [
		{
			index: 1,
			title: 'First',
			description: 'This is First',
		},
		{
			index: 2,
			title: 'Second',
			description: 'This is Second',
		},
		{
			index: 3,
			title: 'Third',
			description: 'This is Third',
		},
		{
			index: 4,
			title: 'Fourth',
			description: 'This is Fourth',
		},
	];
	return (
		<StepperSCSS
			steps={options}
			active={active}
			onClick={(index) => {
				setActive(index);
			}}
		/>
	);
};

export const Tailwind = () => {
	const [active, setActive] = useState(0);
	const options = [
		{
			index: 1,
			title: 'First',
			description: 'This is First',
		},
		{
			index: 2,
			title: 'Second',
			description: 'This is Second',
		},
		{
			index: 3,
			title: 'Third',
			description: 'This is Third',
		},
		{
			index: 4,
			title: 'Fourth',
			description: 'This is Fourth',
		},
	];
	return (
		<StepperTailwind
			steps={options}
			active={active}
			onClick={(index) => {
				setActive(index);
			}}
		/>
	);
};
