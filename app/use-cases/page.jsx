import React from "react";
import SectionIllustrated from "@/components/common/SectionIllustrated";

import styles from "@/styles/page.module.css";

export default function Page() {
	return (
		<div className={styles.pageSections}>
			<SectionIllustrated
				title="Formation"
				image="/image/storyset/formation.svg"
				sectionId="formation"
				imagePosition="right"
				license={{
					url: "https://storyset.com/business",
					text: "Illustrations by Storyset",
				}}
			>
				<p>
					When you open a website, you are looking at a page. A page
					is a single document that can contain text, images, videos,
					and other elements. Pages can be static or dynamic. Static
					pages are predefined and do not change unless the developer
					updates them. Dynamic pages, on the other hand, can change
					based on user interactions or other factors.
				</p>
				<p>
					Pages are typically written in HTML, which stands for
					HyperText Markup Language. HTML is the standard language for
					creating web pages and web applications. It provides the
					structure and organization of content on a page, including
					headings, paragraphs, images, links, and more.
				</p>
			</SectionIllustrated>
			<SectionIllustrated
				title="Monitoring"
				image="/image/storyset/monitoring.svg"
				sectionId="monitoring"
				imagePosition="left"
				license={{
					url: "https://storyset.com/business",
					text: "Illustrations by Storyset",
				}}
			>
				<p>
					When you open a website, you are looking at a page. A page
					is a single document that can contain text, images, videos,
					and other elements. Pages can be static or dynamic. Static
					pages are predefined and do not change unless the developer
					updates them. Dynamic pages, on the other hand, can change
					based on user interactions or other factors.
				</p>
				<p>
					Pages are typically written in HTML, which stands for
					HyperText Markup Language. HTML is the standard language for
					creating web pages and web applications. It provides the
					structure and organization of content on a page, including
					headings, paragraphs, images, links, and more.
				</p>
			</SectionIllustrated>
			<SectionIllustrated
				title="Predictive Maintenance"
				image="/image/storyset/predictive-maintenance.svg"
				sectionId="predictive-maintenance"
				imagePosition="right"
				license={{
					url: "https://storyset.com/business",
					text: "Illustrations by Storyset",
				}}
			>
				<p>
					When you open a website, you are looking at a page. A page
					is a single document that can contain text, images, videos,
					and other elements. Pages can be static or dynamic. Static
					pages are predefined and do not change unless the developer
					updates them. Dynamic pages, on the other hand, can change
					based on user interactions or other factors.
				</p>
				<p>
					Pages are typically written in HTML, which stands for
					HyperText Markup Language. HTML is the standard language for
					creating web pages and web applications. It provides the
					structure and organization of content on a page, including
					headings, paragraphs, images, links, and more.
				</p>
			</SectionIllustrated>
			<SectionIllustrated
				title="Marketing"
				image="/image/storyset/marketing.svg"
				sectionId="marketing"
				imagePosition="left"
				license={{
					url: "https://storyset.com/business",
					text: "Illustrations by Storyset",
				}}
			>
				<p>
					When you open a website, you are looking at a page. A page
					is a single document that can contain text, images, videos,
					and other elements. Pages can be static or dynamic. Static
					pages are predefined and do not change unless the developer
					updates them. Dynamic pages, on the other hand, can change
					based on user interactions or other factors.
				</p>
				<p>
					Pages are typically written in HTML, which stands for
					HyperText Markup Language. HTML is the standard language for
					creating web pages and web applications. It provides the
					structure and organization of content on a page, including
					headings, paragraphs, images, links, and more.
				</p>
			</SectionIllustrated>
		</div>
	);
}
