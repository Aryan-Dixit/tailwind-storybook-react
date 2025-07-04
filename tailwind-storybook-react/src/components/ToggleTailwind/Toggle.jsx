function Toggle({ options, active, onClick }) {
	return (
		<div className='flex gap-px'>
			{options?.map((item) => (
				<button
					key={item.id}
					className={`py-2 px-4 font-bold text-white ${
						active === item.id ? 'bg-secondary' : 'bg-primary'
					}`}
					onClick={() => onClick(item.id)}>
					{item?.title}
				</button>
			))}
		</div>
	);
}

export { Toggle };
