function Step({ title, description, index, active, onClick }) {
	const isCompleted = index < active;

	const icon = isCompleted ? (
		<span className='text-xs text-green-600'>✓</span>
	) : (
		<span className='text-xs text-gray-600'>{index + 1}</span>
	);

	return (
		<div
			className={`flex relative gap-2 cursor-pointer ${isCompleted ? 'text-green-600' : ''}`}
			onClick={() => onClick(index)}>
			<div className='flex flex-col items-center justify-start'>
				<div className='w-6 h-6 rounded-full border border-gray-400 bg-gray-100 text-gray-600 flex items-center justify-center relative'>
					{icon}
				</div>
			</div>
			<div className='flex flex-col items-start'>
				<span className="font-bold relative after:content-[''] after:flex-1 after:border-b after:border-gray-400 after:ml-2 after:mt-2">
					{title}
				</span>
				{description && <span className='text-xs text-gray-600'>{description}</span>}
			</div>
		</div>
	);
}

function Stepper({ steps, active, onClick }) {
	return (
		<div className='flex flex-row items-start gap-4'>
			{steps.map((step, index) => (
				<Step key={index} {...step} index={index} active={active} onClick={onClick} />
			))}
		</div>
	);
}

export { Stepper };
