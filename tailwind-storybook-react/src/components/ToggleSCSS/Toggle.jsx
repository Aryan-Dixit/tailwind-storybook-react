import './Toggle.scss';

function Toggle({ options, active, onClick }) {
	return (
		<div className='scss-container'>
			{options?.map((item) => {
				return (
					<button
						className={
							active === item.id ? 'scss-button-active' : 'scss-button-inactive'
						}
						onClick={() => {
							onClick(item.id);
						}}>
						{item?.title}
					</button>
				);
			})}
		</div>
	);
}

export { Toggle };
