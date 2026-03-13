export interface ContentPageCard {
	title: string;
	description: string;
	items: readonly string[];
}

export interface ContentPageSection {
	title: string;
	cards: readonly ContentPageCard[];
}

export interface GenericPageData {
	title: string;
	paragraphs: readonly string[];
	sections: readonly ContentPageSection[];
	footnote: string;
}
