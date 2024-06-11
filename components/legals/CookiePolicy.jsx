import React from "react";
import styles from "@/styles/legals/policy.module.css";

const CookiePolicy = () => {
	return (
		<div className={styles.container}>
			<h1>Cookie Policy</h1>
			<p>
				This Cookie Policy explains how Wise Twin uses cookies and
				similar technologies to recognize you when you visit our
				website.
			</p>
			<h2>1. What are cookies?</h2>
			<p>
				Cookies are small data files that are placed on your computer or
				mobile device when you visit a website. Cookies are widely used
				by website owners to make their websites work, or to work more
				efficiently, as well as to provide reporting information.
			</p>
			<h2>2. How do we use cookies?</h2>
			<p>We use cookies to:</p>
			<ul>
				<li>
					Authenticate users and prevent fraudulent use of user
					accounts.
				</li>
				<li>
					Understand how our website is being used and improve the
					user experience.
				</li>
				<li>
					Monitor and analyze the performance, operation, and
					effectiveness of our website.
				</li>
			</ul>
			<h2>3. Types of cookies we use</h2>
			<p>We use both session cookies and persistent cookies:</p>
			<ul>
				<li>
					Session cookies are temporary cookies that remain on your
					device until you leave the site.
				</li>
				<li>
					Persistent cookies remain on your device for much longer or
					until you manually delete them.
				</li>
			</ul>
			<h2>4. Managing cookies</h2>
			<p>
				You have the right to decide whether to accept or reject
				cookies. You can exercise your cookie preferences by adjusting
				the settings on your browser.
			</p>
			<h2>5. Contact Us</h2>
			<p>
				If you have questions or comments about this Cookie Policy,
				please contact us at: support@wisetwin.eu
			</p>
		</div>
	);
};

export default CookiePolicy;
