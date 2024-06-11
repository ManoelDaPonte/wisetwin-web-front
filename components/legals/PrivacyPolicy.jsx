import React from "react";
import styles from "@/styles/legals/policy.module.css";

const PrivacyPolicy = () => {
	return (
		<div className={styles.container}>
			<h1>Privacy Policy</h1>
			<p>Welcome to Wise Twin. Your privacy is important to us.</p>
			<h2>1. Introduction</h2>
			<p>
				This Privacy Policy explains how we collect, use, disclose, and
				safeguard your information when you visit our website.
			</p>
			<h2>2. Information We Collect</h2>
			<p>
				We may collect information about you in a variety of ways,
				including:
			</p>
			<ul>
				<li>
					Personal Data: Personally identifiable information, such as
					your name, shipping address, email address, and telephone
					number.
				</li>
				<li>
					Derivative Data: Information our servers automatically
					collect when you access the site, such as your IP address,
					browser type, operating system, access times, and the pages
					you have viewed directly before and after accessing the
					site.
				</li>
			</ul>
			<h2>3. Use of Your Information</h2>
			<p>We may use the information we collect from you to:</p>
			<ul>
				<li>Create and manage your account.</li>
				<li>Email you regarding your account or order.</li>
				<li>
					Fulfill and manage purchases, orders, payments, and other
					transactions related to the site.
				</li>
				<li>
					Generate a personal profile about you to make future visits
					to the site more personalized.
				</li>
			</ul>
			<h2>4. Disclosure of Your Information</h2>
			<p>
				We may share information we have collected about you in certain
				situations. Your information may be disclosed as follows:
			</p>
			<ul>
				<li>
					By Law or to Protect Rights: If we believe the release of
					information about you is necessary to respond to legal
					process, to investigate or remedy potential violations of
					our policies, or to protect the rights, property, and safety
					of others.
				</li>
				<li>
					Business Transfers: We may share or transfer your
					information in connection with, or during negotiations of,
					any merger, sale of company assets, financing, or
					acquisition of all or a portion of our business to another
					company.
				</li>
			</ul>
			<h2>5. Contact Us</h2>
			<p>
				If you have questions or comments about this Privacy Policy,
				please contact us at: support@wisetwin.eu
			</p>
		</div>
	);
};

export default PrivacyPolicy;
