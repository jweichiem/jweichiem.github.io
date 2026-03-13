import type { ReactNode } from 'react';
import { createElement } from 'react';
import './style.scss';

interface PresentationalCardProps {
	title: string;
	description: string;
	titleTagName?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	children?: ReactNode;
	className?: string;
}

const PresentationalCard = ({
	title,
	description,
	titleTagName = 'h3',
	children,
	className,
}: PresentationalCardProps) => {
	const cardClassName = ['presentational-card', className]
		.filter(Boolean)
		.join(' ');

	return (
		<section className={cardClassName}>
			{createElement(titleTagName, undefined, title)}
			<p>{description}</p>
			{children}
		</section>
	);
};

export default PresentationalCard;
