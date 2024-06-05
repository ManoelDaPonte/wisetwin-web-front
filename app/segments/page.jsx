import styles from "@/styles/page.module.css";
import GridWithCards from "@/components/common/GridWithCards";
import SectionIllustrated from "@/components/common/SectionIllustrated";
import Title from "@/components/common/Title";
export default function Page() {
	const cards = [
		{ title: "Card 1", text: "This is the text for card 1" },
		{
			title: "Card 4",
			text: "This is the text for card 4 This is the text for card 4This is the text for card 4This is the text for card 4This is the text for card 4This is the text for card 4This is the text for card 4This is the text for card 4This is the text for card 4This is the text for card 4This is the text for card 4",
		},
		{ title: "Card 2", text: "This is the text for card 2" },
		{ title: "Card 3", text: "This is the text for card 3" },
	];
	return (
		<div className={styles.pageSections}>
			<div>
				<Title text={"Digital Twin for Energy"} id={"smart-energy"} />
				<SectionIllustrated
					title="Formation"
					image="/image/png/saas_energy.png"
					imagePosition="right"
				>
					<p>
						When you open a website, you are looking at a page. A
						page is a single document that can contain text, images,
						videos, and other elements. Pages can be static or
						dynamic. Static pages are predefined and do not change
						unless the developer updates them. Dynamic pages, on the
						other hand, can change based on user interactions or
						other factors.
					</p>
					<p>
						Pages are typically written in HTML, which stands for
						HyperText Markup Language. HTML is the standard language
						for creating web pages and web applications. It provides
						the structure and organization of content on a page,
						including headings, paragraphs, images, links, and more.
					</p>
				</SectionIllustrated>
				<GridWithCards cards={cards} />
			</div>
			<div>
				<Title
					text={"Digital Twin for Warehouse Monitoring"}
					id={"warehouse-monitoring"}
				/>
				<SectionIllustrated
					title="Formation"
					image="/image/png/saas_energy.png"
					imagePosition="right"
				>
					<p>
						When you open a website, you are looking at a page. A
						page is a single document that can contain text, images,
						videos, and other elements. Pages can be static or
						dynamic. Static pages are predefined and do not change
						unless the developer updates them. Dynamic pages, on the
						other hand, can change based on user interactions or
						other factors.
					</p>
					<p>
						Pages are typically written in HTML, which stands for
						HyperText Markup Language. HTML is the standard language
						for creating web pages and web applications. It provides
						the structure and organization of content on a page,
						including headings, paragraphs, images, links, and more.
					</p>
				</SectionIllustrated>
				<GridWithCards cards={cards} />
			</div>
			<div>
				<Title text={"Digital Twin for Smart City"} id={"smart-city"} />
				<SectionIllustrated
					title="Formation"
					image="/image/png/saas_energy.png"
					imagePosition="right"
				>
					<p>
						When you open a website, you are looking at a page. A
						page is a single document that can contain text, images,
						videos, and other elements. Pages can be static or
						dynamic. Static pages are predefined and do not change
						unless the developer updates them. Dynamic pages, on the
						other hand, can change based on user interactions or
						other factors.
					</p>
					<p>
						Pages are typically written in HTML, which stands for
						HyperText Markup Language. HTML is the standard language
						for creating web pages and web applications. It provides
						the structure and organization of content on a page,
						including headings, paragraphs, images, links, and more.
					</p>
				</SectionIllustrated>
				<GridWithCards cards={cards} />
			</div>
			<div>
				<Title
					text={"Digital Twin for Smart Buildings"}
					id={"smart-buildings"}
				/>
				<SectionIllustrated
					title="Formation"
					image="/image/png/saas_energy.png"
					imagePosition="right"
				>
					<p>
						When you open a website, you are looking at a page. A
						page is a single document that can contain text, images,
						videos, and other elements. Pages can be static or
						dynamic. Static pages are predefined and do not change
						unless the developer updates them. Dynamic pages, on the
						other hand, can change based on user interactions or
						other factors.
					</p>
					<p>
						Pages are typically written in HTML, which stands for
						HyperText Markup Language. HTML is the standard language
						for creating web pages and web applications. It provides
						the structure and organization of content on a page,
						including headings, paragraphs, images, links, and more.
					</p>
				</SectionIllustrated>
				<GridWithCards cards={cards} />
			</div>
			<div>
				<Title
					text={"Digital Twin for industry 4.0"}
					id={"industry-4.0"}
				/>
				<SectionIllustrated
					title="Formation"
					image="/image/png/saas_energy.png"
					imagePosition="right"
				>
					<p>
						When you open a website, you are looking at a page. A
						page is a single document that can contain text, images,
						videos, and other elements. Pages can be static or
						dynamic. Static pages are predefined and do not change
						unless the developer updates them. Dynamic pages, on the
						other hand, can change based on user interactions or
						other factors.
					</p>
					<p>
						Pages are typically written in HTML, which stands for
						HyperText Markup Language. HTML is the standard language
						for creating web pages and web applications. It provides
						the structure and organization of content on a page,
						including headings, paragraphs, images, links, and more.
					</p>
				</SectionIllustrated>
				<GridWithCards cards={cards} />
			</div>
		</div>
	);
}
