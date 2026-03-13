import { createElement } from 'react';
import { Link } from 'wouter';
import { useI18n } from '../../i18n/index.tsx';
import './style.scss';

interface CardEntrypointProps {
	title: string;
	description: string;
	href: string;
	ctaLabel: string;
	titleTagName?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	className?: string;
}

const CardEntrypoint = ({
	title,
	description,
	href,
	ctaLabel,
	titleTagName = 'h3',
	className,
}: CardEntrypointProps) => {
	const { localizePath } = useI18n();
	const ctaId = `card-entrypoint-cta-${href.replaceAll('/', '-').replace(/^-+/, '')}`;
	const cardClassName = ['card-entrypoint', className]
		.filter(Boolean)
		.join(' ');

	return (
		<article className={cardClassName}>
			{createElement(
				titleTagName,
				undefined,
				<Link
					aria-describedby={ctaId}
					className="card-entrypoint__link"
					href={localizePath(href)}
				>
					{title}
				</Link>,
			)}
			<p>{description}</p>
			<span className="card-entrypoint__cta" id={ctaId}>
				{ctaLabel}
			</span>
		</article>
	);
};

export default CardEntrypoint;
