import styles from "@/styles/common/offerCard.module.css";
import Button from "@/components/common/Button";
import Image from "next/image";

export default function OfferCard({
	title = "Default Title",
	description = "Default Description",
	image,
	items = [],
}) {
	return (
		<div className={styles.offerCard}>
			<div className={styles.offerImage}>
				<Image
					src={image}
					alt="Offer"
					layout="fill"
					objectFit="cover"
				/>
			</div>
			<div className={styles.offerTitle}>{title}</div>
			<div className={styles.offerDescription}>{description}</div>
			<div className={styles.offerItem}>
				{items.map((item, index) => (
					<li key={index} className={styles.offerItem}>
						{item}
					</li>
				))}
			</div>
		</div>
	);
}
