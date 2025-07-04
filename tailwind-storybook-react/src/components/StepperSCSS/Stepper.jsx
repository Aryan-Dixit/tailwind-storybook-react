import './Stepper.scss';

function Step({ title, description, index, active, onClick }) {
	let icon = <span className='step-text'>{index}</span>;

	if (index < active) {
		icon = <span className='step-icon completed'>✓</span>;
	}

	return (
		<div
			className={`step-root  ${index < active ? 'completed' : ''} `}
			onClick={() => onClick(index)}>
			<div className='step-left'>
				<div className='step-icon-container'>{icon}</div>
			</div>
			<div className='step-right'>
				<span className='step-title'>{title}</span>
				{description && <span className='step-description'>{description}</span>}
			</div>
		</div>
	);
}

function Stepper({ steps, active, onClick }) {
	return (
		<div className='stepper-root horizontal'>
			{steps.map((step, index) => (
				<Step key={index} {...step} active={active} onClick={onClick} />
			))}
		</div>
	);
}

export { Stepper };
