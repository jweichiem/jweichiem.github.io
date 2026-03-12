import './style.scss';

type SkillsListProps = {
	items: readonly string[];
	className?: string;
};

const SkillsList: React.FC<SkillsListProps> = ({ items, className }) => {
	const classes = ['skills-list', className].filter(Boolean).join(' ');

	return (
		<ul className={classes}>
			{items.map((item) => (
				<li className="skills-list__item" key={item}>
					{item}
				</li>
			))}
		</ul>
	);
};

export default SkillsList;
