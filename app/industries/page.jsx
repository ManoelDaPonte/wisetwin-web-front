import styles from "@/styles/page.module.css";
import GridWithCards from "@/components/common/GridWithCards";
import SectionIllustrated from "@/components/common/SectionIllustrated";
import Title from "@/components/common/Title";
export default function Page() {
	const cards = [
		{
			title: "Accurate forecasting",
			text: "Predicting supply and demand to optimize the production and integration (shading scenes calculation in complex topographies, integration of meteorological data).",
		},
		{
			title: "Predictive maintenance",
			text: "prevent from equipment failures. ",
		},
		{
			title: "Real-time monitoring",
			text: "Analysing data from sensors and smart meters on solar panels to optimize energy flow and manage grid congestion. ",
		},
		{
			title: "Demand response",
			text: "Managing peak demand through dynamic pricing and incentives for energy use when solar production is high. ",
		},
	];
	return (
		<div className={styles.pageSections}>
			<div>
				<Title text={"Digital Twin for Energy"} id={"smart-energy"} />
				<SectionIllustrated
					// title="Formation"
					image="/image/png/saas_energy.png"
					imagePosition="right"
				>
					<p>
						Complex grids and growing renewable energy capacity will
						change the way we manage electricity. Using AI tools to
						support the design, monitoring, and maintenance of power
						plants will be necessary for handling these complex
						infrastructure and optimize electricity production.
						Solar PV accounts for over two-thirds of new capacity in
						Europe (2023-2028) thanks to supportive policies
						(feed-in tariffs, tax exemptions) in Germany, Italy,
						Spain, France, etc. Here is what Digital Twins and
						numerical modelling can do:
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
