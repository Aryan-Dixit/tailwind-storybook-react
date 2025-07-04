import './Button.scss';

function Button({ label, onClick }) {
	return (
		<button className='scss-button' onClick={onClick}>
			{label}
		</button>
	);
}

export { Button };
