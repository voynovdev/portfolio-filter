const Toolbar = ({ filters, selected, onSelectFilter }) => {
	return (
		<div>
			{filters.map((filter, index) => (
				<button
					key={index}
					onClick={() => onSelectFilter(filter)}
					className={filter === selected ? 'active' : ''}
				>
					{filter}
				</button>
			))}
		</div>
	);
}

export default Toolbar;