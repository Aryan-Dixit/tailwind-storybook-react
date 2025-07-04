function Button({ label, onClick }) {
	return (
		<button
			className='bg-primary py-2 px-4 font-bold text-white rounded hover:bg-blue-700'
			onClick={onClick}>
			{label}
		</button>
	);
}

export { Button };
